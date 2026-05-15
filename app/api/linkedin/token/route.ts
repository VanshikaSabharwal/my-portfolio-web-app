import { NextResponse } from 'next/server'

const CLIENT_ID = '77ds3zcyy0li8f'
const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET
const REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI || 'http://localhost:3000/linkedin-callback'

export async function POST(request: Request) {
  try {
    const { code } = await request.json()

    if (!code) {
      return NextResponse.json({ error: 'No code provided' }, { status: 400 })
    }

    if (!CLIENT_SECRET) {
      return NextResponse.json(
        { error: 'Missing LINKEDIN_CLIENT_SECRET in environment' },
        { status: 500 }
      )
    }

    // Exchange code for access token
    const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }).toString(),
    })

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text()
      console.error('LinkedIn token exchange error:', errorData)
      return NextResponse.json(
        { error: `LinkedIn token exchange failed: ${errorData}` },
        { status: tokenResponse.status }
      )
    }

    const tokenData = await tokenResponse.json()
    const { access_token, expires_in } = tokenData

    if (!access_token) {
      return NextResponse.json({ error: 'No access token in response' }, { status: 500 })
    }

    // Fetch user profile to get member ID
    const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'X-RestLi-Protocol-Version': '2.0.0',
      },
    })

    if (!profileResponse.ok) {
      const profileError = await profileResponse.text()
      console.error('LinkedIn profile fetch error:', profileError)
      return NextResponse.json(
        { error: `Failed to fetch profile: ${profileError}` },
        { status: profileResponse.status }
      )
    }

    const profileData = await profileResponse.json()
    const memberId = profileData.id

    if (!memberId) {
      return NextResponse.json({ error: 'No member ID in profile' }, { status: 500 })
    }

    // Save token to a file or cookie (here we'll return it for client-side storage)
    // For production, consider using a database or secure session storage
    const response = NextResponse.json({
      success: true,
      access_token,
      expires_in,
      member_id: memberId,
      member_urn: `urn:li:person:${memberId}`,
    })

    // Set as secure HTTP-only cookie (optional, for added security)
    response.cookies.set('linkedin_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: expires_in || 7776000, // 90 days default
    })

    return response
  } catch (error) {
    console.error('Token exchange error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
