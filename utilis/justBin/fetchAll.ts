import config from "../../config.json";

export default async function fetchAll(args: string[]): Promise<string> {
  return `

         ============
           SUMMARY
         ============

          <strong>ABOUT</strong>
           ${config.name}
           <Link href="${config.resume_url}" target="_blank">Resume /> 
           <Link href="${config.repo}" target="_blank">Github Repo />
    
       
          <strong>CONTACT</strong>
           <Link href="mailto:${config.email}" target="_blank">${config.email} />
           <Link href="${config.social.linkedin}" target="_blank">Linkedin. />
           <Link href="${config.social.twitter}" target="_blank">X />
           <Link href="${config.social.github}" target="_blank">Github />
                 
          <strong>DONATE</strong>
           <Link href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal} />
           <Link href="${config.donate_urls.buy_me_a_coffee}" target="_blank">${config.donate_urls.buy_me_a_coffee} />
           <Link href="${config.donate_urls.gpay}" target="_blank">${config.donate_urls.gpay} />

        `;
}
