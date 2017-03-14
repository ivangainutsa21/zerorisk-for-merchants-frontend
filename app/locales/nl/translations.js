export default {
  'app': {
    'full_name': 'ZeroRisk voor Verkopers',
    'family_name': 'ZeroRisk',
    'unbranded_full_name': 'PCI DSS platform'
  },
  'status': {
  	'Compliant': 'Naleving',
  	'NotCompliant': 'Geen Naleving',
  	'Enrolled': 'Ingeschreven',
  	'NotEnrolled': 'Niet Ingeschreven',
  	'Closed': 'Gesloten',
  	'asv_compliant': 'Succesvol doorstaan',
  	'asv_not_compliant': 'Niet succesvol doorstaan'
  },
  'notification': {
    'no_notifications': "Geen meldingen om weer te geven",
    'read_all': "Lees alle meldingen"
  },
  'saq_status': {
    'pending': 'Lopend',
    'completed': 'Voltooid',
    'submitted': 'Ingediend'
  },
  'messages': {
    'complete_wizard': "U dient de inschrijvingswizard te voltooien voordat u de applicatie gebruikt."
  },
  'menus': {
    'dashboard_subtitle': 'Uw Verkoper Hoofdpagina',
    'saq_subtitle': 'Beheer uw Zelfevaluatievragenlijsten (SAQs)'
  },  
  'enrollment': {
    'welcome': {
      'title': "Welkom",
      'start_part_1': "U bent hier omdat u uw naleving van PCI DSS richtlijnen voor de betaalkaartenindustrie dient aan te tonen",
      'start_part_2': "Door op <b>Start</b> te klikken, begint u de inschrijfprocedure gebaseerd op <b>3 eenvoudige stappen</b>. Hiermee kan uw organisatie de correcte PCI DSS Zelfevaluatievragenlijst (SAQ) identificeren en voltooien.",
      'start_part_3': "Neem a.u.b. enkele minuten de tijd om de reis te voltooien en <i>doe uw gordel om!</i>",
      'terms_and_conditions_part_1': "Ik ga akkoord met de",
      'terms_and_conditions_part_2': "Algemene Voorwaarden"
    },
    'user_details': {
      'title': "gebruikersdetails",
      'user_details_part_1': "Bevestig uw details",
      'user_details_part_2': "Bevestig a.u.b. uw bedrijfsdetails voordat u verdergaat, wij gebruiken deze om de vereiste PCI DSS documentatie te genereren.",
      'user_details_part_3': "Waarom?",
      'user_details_part_4': "De PCI Raad en de kaartenregelingen vereisen dat in aanmerking komende verkopers voldoen aan de zogenaamde Zelfevaluatievragenlijst (of SAQ) op jaarlijke basis. <br> Sterker nog, een belangrijke sectie van een dergelijk document is vertegenwoordigd door de Attestation of Compliance (of AOC) welke bedrijfsinformatie bevat zoals juridische contaten en bedrijfssoort (bijvoorbeeld e-Commerce of MOTO (Mail Order Telephone Order)).",
      'user_details_part_5': "Het voltooien van een Zelfevaluatievragenlijst vertegenwoordigt een aanname van verantwoordelijkheid naar de kaartenregelingen van de industrie, uw financiële instellingen en uw betrokken zakenpartners.",
      'form_part_1': "Contactinformatie",
      'form_part_2': "Bedrijfsinformatie"  
    },
    'saq_detection': {
      'title': "saq detectie",
      'saq_detection_part1': "Volgende",
      'saq_detection_part2': "Neem a.u.b. een aantal minuten de tijd om verder te gaan met de rest van de inschrijfwizard, wij gidsen u door de eenvoudige vragen zodat wij de correcte Zelfevaluatievragenlijst (SAQ) kunnen vaststellen voor uw organisatie en de manier waarop het kaarthoudergegevens (betaalkaartgegevens) opslaat, verwerkt en verzendt.",
      'saq_detection_part3': "Uw reis naar naleving",
      'saq_detection_part4': "Terwijl u deze applicatie gebruikt, ontwikkelt uw organisatie zich over een aantal statussen, van de initiële \"Niet Ingeschreven\" status (dit is de status die u op dit moment heeft) tot de \"Naleving\" status.",
      'saq_detection_part5': "Zodra een categorie Zelfevaluatievragenlijst (SAQ) vastgesteld is en toegekend is aan uw organisatie, verandert uw status naar \"Ingeschreven\" en bent u nog slechts een aantal stappen verwijderd van de PCI DSS Naleving!",
      'saq_detection_part6': "Het applicatiedashboard laat op elk moment uw huidige status zien. Houd er rekening mee dat het uw doel is om \"Naleving\" te bereiken. Wanneer u naleving heeft bereikt, kunt u uw Zelfevaluatievragenlijst (SAQ) indienen en downloaden."
    }
  },
  'saq_editor': {
      'button_yes': "Ja",
      'button_no': "Nee",
      'button_notapplicable': "Niet Toepasbaar",
      'button_compenstatingcontrol': "Compenserende Controle",
      'button_submit': "Zelfevaluatievragenlijst (SAQ) indienen",
      'button_submit_submittable': "U heeft de Zelfevaluatievragenlijst (SAQ) voltooid en kunt deze nu indienen.",
      'button_submit_downloadable': "U kunt een kopie van uw Zelfevaluatievragenlijst (SAQ) downloaden door hier te klikken.",
      'hover_notapplicable': "Indien deze vraag niet toepasbaar is voor uw bedrijf, selecteer dan deze optie en geef een duidelijke uitleg in het volgende scherm.",
      'hover_notapplicable_edit': "Toon geleverde rechtvaardiging van dit Niet Toepasbare antwoord.",
      'hover_compensatingcontrol': "Indien een compenserende controle benodigd is voor deze voorwaarde, selecteer dan deze optie om alle benodigde informatie te leveren.",
      'hover_compensatingcontrol_edit': "View provided Compensating Controls for this answer.",
      'not_applicable': {
        'title': "Uitleg van Niet-Toepasbaarheid",
        'subtitle': "Leg uit waarom de gerelateerde voorwaarde niet toepasbaar is voor uw organisatie.",
        'example': "Aanvullende media niet gebruikt voor het verwerken van betalingstransacties.",

      },
      'compensating_control': {
        'constraints': {
          'title': "Beperkingen",
          'subtitle': "Vermeld a.u.b. alle beperkingen voorafgaand aan naleving van de originele voorwaarde. Raadpleeg het volgende voorbeeld van beperkingen waardoor het indienen van een Compenserende Controle benodigd is.",
          'example': "bijvoorbeeld: Bedrijf XYZ hanteert stand-alone Unix Servers zonder LDAP (Lightweight Directory Access Protocol). Hiervoor hebben zij een “root” login nodig. Het is niet mogelijk voor Bedrijf XYZ om de “root” login te beheren en het is ook niet haalbaar om alle “root” activiteit per gebruiker in logbestanden op te slaan."
        },
        'objective': {
          'title': "Doel",
          'subtitle': "Definieer a.u.b. het doel van de originele controle die gekoppeld is aan deze voorwaarde, om te bevestigen dat de compenserende controle acceptabel is en voldoet aan de originele intentie.",
          'example': "bijvoorbeeld: Het doel van de behoefte aan unieke logins is tweeledig. Ten eerste wordt het vanuit een beveiligingsperspectief niet als acceptabel gezien om logingegevens te delen. Ten tweede is het met gedeelde logins onmogelijk om onherroepelijk vast te stellen dat een persoon verantwoordelijk is voor een bepaalde handeling."
        },
        'risks': {
          'title': "Risico's",
          'subtitle': "Voeg a.u.b. alle eventuele aanvullende risico's toe, die ontstaan vanwege het gebrek van de originele controle. Dit is tevens nodig ter bevestiging dat de intentie van deze voorwaarde volledig begrepen is.",
          'example': "bijvoorbeeld: Een aanvullend risico is geïntroduceerd aan het toegangscontrolesysteem door niet te garanderen dat alle gebruikers een uniek ID hebben en gevolgd kunnen worden."
        },
        'definition': {
          'title': "Definitie",
          'subtitle': "Definieer a.u.b. de compenserende controles en leg uit hoe zij zich richten op de doelen van de originele controle en het verhoogde risico, indien toepasselijk. Dit is benodigd om te verifiëren dat de compenserende controles de overgebleven risico's, die ontstaan zijn door het gebrek aan naleving van de originele voorwaarde, elimineren.",
          'example': "bijvoorbeeld: Bedrijf XYZ vereist dat alle gebruikers inloggen in de servers vanaf hun desktops en gebruikmaken van het SU (substitute user) commando. SU geeft een gebruiker toegang tot het “root” account en het uitvoeren van handelingen via het “root” (ofwel beheer) account, maar dit kan wel gelogd worden in het SU-logbestand. Op deze manier kunnen de handelingen van elke gebruiker bijgehouden worden via het SU account."
        },
        'validation': {
          'title': "Validatie",
          'subtitle': "Definieer a.u.b. hoe de omschreven compenserende controles gevalideerd en getest zijn om te bevestigen dat zij een legitieme tegenmaatregel vormen voor het gebrek aan naleving van de originele voorwaarde.",
          'example': "bijvoorbeeld: Bedrijf XYZ demonstreert aan de beoordelaar dat het gehanteerde SU-commando, en die individuen die het commando hanteren, opgeslagen worden in een logbestand ter identificatie van het individu dat handelingen uitvoert met root machtigingen."
        },
        'maintenance': {
          'title': "Onderhoud",
          'subtitle': "Definieer a.u.b. alle gehanteerde processen en controles voor het onderhouden van compenserende controles zodra deze geïmplementeerd zijn.",
          'example': "bijvoobeeld: Bedrijf XYZ documenteert de processen en procedures om te garanderen dat SU-configuraties niet gewijzigd, aangepast of verwijderd worden zodat individuele gebruikers root commando's kunnen uitvoeren zonder individueel bijgehouden of gelogd te worden."
        }
      }
  },
  'dashboard': {
      'leftup_merchant_status': "Uw verkoperstatus",
      'rightbottom_saq_completeness': "Zelfevaluatievragenlijst (SAQ) Voltooidheid",
      'rightup_title': "Volgende",
      'rightup_message': "Benodigde handelingen om Naleving te bereiken",
      'rightup_message_saq_submit': "Dien uw Zelfevaluatievragenlijst (SAQ) in",
      'rightup_message_saq_complete': "Voltooi je SAQ",
      'rightup_message_saq_download': "Download het SAQ"
  }
};