# DOL Chatbot(s) - We've got two and a legacy one
**Overall Disclaimers:** 
1. When embedding the bots on ACSF, if you change the editor view to something other than "Full HTML" or if you do not have administrator access, then problems will happen with saving the page or the bot embed code may not work properly. 
2. *NYS Digital Services does not recommend this method* of "hacking" in components or integrations into an Acquia Cloud Drupal Site. We're presented with no other option but to proceed with this limited and non-best practice way of getting the code to deploy on this website.

## DOL Homepage and Unemployment Assistance page (Accenture Bot)
This bot is built by Accenture and we're unsure of the backend provider (proprietary?). Unlike the other two bots this one requires significantly more code to be embedded in the source view of the wysiwyg. 

The packaged dev code the vendor provided is in the folder **Accenture-bot** --> **NYDOL_Prod_Assetpackage**
The embeddable inline code is  **Accenture-bot** --> **DOL-accenture-bot-inline.html**

### Architecture Decision Record (Accenture bot)
This situtation presented itself under less than ideal circumstances and with little time to test and validate for engineering and accessibility. NYSDS worked with the vendors developement team to make sure that keyboard controls worked properly with the bot and that the initial launch icons were reachable and focusable to meet wcag 2.0 a and aa standards (2.4.3 focus especially). 

## Excluded Workers Fund (Google Perkins Bot)
This is a google bot that can be embedded on any ACSF page. It's currently only on the EWF homepage. Use the code in the file --> **DOL-google-ewf-perkins-bot.html**

### Architecture Decision Record (EWF bot)
We did extensive testing and remediation with the Google approved vendor to ensure that this bot meets wcag 2.0 AA, including many rounds of testing and retesting with all available assistive technology. A major issue that occurred with this bot was that it rendered behind the hero and footer and several other elements and caused a weird flicker at mobile. 95% of this was resolved with the bot rendering correctly, but some occassional flicker still exists at mobile when the bot has been opened and then closed.

For this to work on an ACSF site you need administrator access to use the WYSIWYG full html source option. 
1. Add WYSIWYG Paragraph to any page where it is available
2. Change the editor view to "Full HTML"
3. Click the "Source" button in the editor to turn on source code view
4. Paste the embed code at the very bottom of the source view being careful to use the entire code snippet and not break any existing tags.
5. Click the "Source" button in the editor to turn off source code view
6. Save the page


## Deprecated Astutebot (legacy homepage bot)
This was an astutebot embed from Verizon. This bot used to be on the homepage and was replaced with the Accenture bot. If you need to re-implement this bot, follow the directions below and use the code in the file in the folder **deprecated** --> *DOL-astutebot-homepage.html* 

For this to work on an ACSF site you need administrator access to use the WYSIWYG full html source option. 
1. Add WYSIWYG Paragraph to any page where it is available
2. Change the editor view to "Full HTML"
3. Click the "Source" button in the editor to turn on source code view
4. Paste the embed code at the very bottom of the source view being careful to use the entire code snippet and not break any existing tags.
5. Click the "Source" button in the editor to turn off source code view
6. Save the page