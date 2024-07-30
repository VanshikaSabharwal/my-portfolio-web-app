import config from "../../config.json";

export default async function fetchAll(args: string[]): Promise<string> {
  return `

         ============
           SUMMARY
         ============

          <strong>ABOUT</strong>
           ${config.name}
           <a href="${config.resume_url}" target="_blank">Resume</a> 
           <a href="${config.repo}" target="_blank">Github Repo</a>
    
       
          <strong>CONTACT</strong>
           <a href="mailto:${config.email}" target="_blank">${config.email}</a>
           <a href="${config.social.linkedin}" target="_blank">Linkedin.</a>
           <a href="${config.social.twitter}" target="_blank">X</a>
           <a href="${config.social.github}" target="_blank">Github</a>
                 
          <strong>DONATE</strong>
           <a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a>
           <a href="${config.donate_urls.buy_me_a_coffee}" target="_blank">${config.donate_urls.buy_me_a_coffee}</a>
           <a href="${config.donate_urls.gpay}" target="_blank">${config.donate_urls.gpay}</a>

        `;
}
