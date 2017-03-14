export default {
  'app': {
    'full_name': 'ZeroRisk für Händler',
    'family_name': 'ZeroRisk',
    'unbranded_full_name': 'PCI DSS-Plattform'
  },
  'status': {
  	'Compliant': 'Compliance erreicht',
  	'NotCompliant': 'Compliance nicht erreicht',
  	'Enrolled': 'Angemeldet',
  	'NotEnrolled': 'Nicht angemeldet',
  	'Closed': 'Geschlossen',
  	'asv_compliant': 'Besteht',
  	'asv_not_compliant': 'Besteht nicht'
  },
  'notification': {
    'no_notifications': "Keine Benachrichtigungen zur Anzeige vorliegend",
    'read_all': "Alle Benachrichtigungen lesen"
  },
  'saq_status': {
    'pending': 'Anstehend',
    'completed': 'Komplett',
    'submitted': 'Eingereicht'
  },
  'messages': {
    'complete_wizard': "Sie müssen den Anmelde-Assistenten durchlaufen, ehe Sie die Applikation verwenden."
  },
  'menus': {
    'dashboard_subtitle': 'Ihre Händler-Hauptseite',
    'saq_subtitle': 'Verwalten Sie Ihre SAQ-Fragebögen'
  },  
  'enrollment': {
    'welcome': {
      'title': "Willkommen",
      'start_part_1': "Sie sind hier, um der Kartenbranche Ihre PCI DSS-Compliance darzulegen.",
      'start_part_2': "Indem Sie auf <b>Start</b> klicken, starten Sie den Anmeldevorgang mittels <b>3 simpler Schritte</b>. So lässt sich der für Ihre Organisation geeignete PCI DSS Self Assessment Questionnaire (SAQ – Fragebogen zur Eigenbewertung) ermitteln, den Sie dann bitte ausfüllen.",
      'start_part_3': "Bitte nehmen Sie sich ein paar Minuten Zeit, um den Vorgang zu durchlaufen, und dann <i>ab geht die Post!</i>",
      'terms_and_conditions_part_1': "Ich akzeptiere die",
      'terms_and_conditions_part_2': "Allgemeinen Geschäftsbedigungen"
    },
    'user_details': {
      'title': "Nutzer-Details",
      'user_details_part_1': "Bestätigen Sie Ihre Details",
      'user_details_part_2': "Bitte überprüfen Sie Ihre Business-Details, ehe Sie fortfahren. Auf Basis dieser Angaben generieren wir die erforderlichen PCI DSS-Unterlagen.",
      'user_details_part_3': "Warum?",
      'user_details_part_4': "Das PCI-Gremium und die Kartenrichtlinien halten die entsprechenden Händler dazu an, auf Jahresbasis den sogenannten Self Assessment Questionnaire (kurz: SAQ) auszufüllen. <br> Ein wesentlicher Abschnitt des Dokuments ist speziell die Attestation of Compliance (kurz: AOC), die detaillierte Angaben wie etwa die Art des Business (d.h., eCommerce oder MOTO) und den/die Ansprechpartner in Rechtsangelegenheiten beinhalten.",
      'user_details_part_5': "Das Ausfüllen des Self Assessment Questionnaires trägt Ihrer Verantwortlichkeit gegenüber den Kartenrichtlinien der Branche, den Finanzinstituten und ggf. involvierten Business-Partnern Rechnung.",
      'form_part_1': "Kontaktdaten",
      'form_part_2': "Angaben zum Business"  
    },
    'saq_detection': {
      'title': "SAQ-Ermittlung",
      'saq_detection_part1': "Es folgt",
      'saq_detection_part2': "Bitte nehmen Sie sich ein paar Minuten Zeit, um mit dem Rest des Anmelde-Assistenten fortzufahren. Der Assistent führt Sie Schritt für Schritt durch ein paar simple Fragen, mit denen sich für Ihre Organisation und deren Methoden der Speicherung, Verarbeitung und Übertragung von Karteninhaberdaten (bzw. Zahlkartendaten) der passende SAQ-Fragebogen ermitteln lässt.",
      'saq_detection_part3': "Ihr Compliance-Lauf",
      'saq_detection_part4': "Im Zuge Ihrer Nutzung der Applikation wird Ihre Organsiation eine Reihe von Stadien durchlaufen: vom Anfangsstadium \"Nicht angemeldet\" (was das gegenwärtige Stadium ist) bis zum Zielstadium \"Compliance erreicht\".",
      'saq_detection_part5': "Wurde die passende SAQ-Kategorie für Sie ermittelt, so wechselt Ihre Organisation in das Stadium \"Angemeldet\". Von dort aus sind es nur noch wenige Schritte zur PCI DSS-Compliance!",
      'saq_detection_part6': "Das Steuerfeld der Applikation zeigt Ihnen zu jeder Zeit das jeweilige Stadium an. Ihr Ziel ist der Eintritt in das Stadium \"Compliance erreicht\". In diesem Stadium angekommen, können Sie Ihren SAQ-Fragebogen einreichen und eine Ausfertigung herunterladen."
    }
  },
  'saq_editor': {
      'button_yes': "Ja",
      'button_no': "Nein",
      'button_notapplicable': "Entfällt",
      'button_compenstatingcontrol': "Kompensierende Kontrolle",
      'button_submit': "SAQ einreichen",
      'button_submit_submittable': "Sie haben den SAQ-Fragebogen ausgefüllt und können ihn nun einreichen.",
      'button_submit_downloadable': "Sie können eine Ausfertigung Ihres SAQ-Fragebogens herunterladen, indem Sie hier klicken.",
      'hover_notapplicable': "Sollte diese Frage bei Ihrem Business entfallen, so wählen Sie bitte diese Option, um auf dem nächsten Schirm eine Erläuterung dazu abzugeben.",
      'hover_notapplicable_edit': "Die Erläuterung für das Entfallen dieser Frage anschauen.",
      'hover_compensatingcontrol': "Sollte für diese Anforderung eine kompensierende Kontrolle nötig sein, so wählen Sie bitte diese Option, um alle erforderlichen Angaben zu machen.",
      'hover_compensatingcontrol_edit': "View provided Compensating Controls for this answer.",
      'not_applicable': {
        'title': "Erläuterung zum Entfallen der Frage",
        'subtitle': "Erläutern Sie bitte, warum die betreffende Anforderung für Ihre Organisation entfällt.",
        'example': "z.B.: Kein Einsatz zusätzlicher Medien zwecks Verarbeitung der Zahlungstransaktionen.",

      },
      'compensating_control': {
        'constraints': {
          'title': "Einschränkungen",
          'subtitle': "Bitte nennen Sie alle Einschränkungen, die einer Compliance mit der ursprünglichen Anforderung entgegenstehen. Richten Sie sich dazu nach dem folgenden Beispiel für Einschränkungen, die das Einreichen einer kompensierenden Kontrolle erzwingen.",
          'example': "z.B.: Firma XYZ verwendet autarke Unix-Server ohne LDAP (Lightweight Directory Access Protocol). Daher benötigt jeder einen „Root“-Login. Weder ist es Firma XYZ möglich, das „Root“-Login zu verwalten, noch ist es realistisch, sämtliche „Root“-Aktivitäten jedes einzelnen Nutzers zu loggen."
        },
        'objective': {
          'title': "Zielvorgabe",
          'subtitle': "Bitte definieren Sie die Zielvorgabe der ursprünglichen Kontrolle, die mit dieser Anforderung verknüpft ist, um zu bestätigen, dass die kompensierende Kontrolle in Einklang mit dem ursprünglichen Sinn und Zweck steht.",
          'example': "z.B.: Die Zielvorgabe der Notwendigkeit von Unique Logins ist zweierlei. Erstens ist es aus Perspektiven der Sicherheit inakzeptabel, Login-Daten weiterzugeben. Zweitens machen es Shared Logins unmöglich, einem Individuum die Verantwortung für eine konkrete Handlung nachzuweisen."
        },
        'risks': {
          'title': "Risiken",
          'subtitle': "Bitte schließen Sie alle zusätzlichen Risiken ein, die aus dem Mangel der ursprünglichen Kontrolle hervorgehen, soweit verfügbar. Dies dient auch zur Verifizierung, dass Sinn und Zweck dieser Anforderung voll verstanden worden sind.",
          'example': "z.B.: Zusätzliche Risiken für das Zugangskontrollsystem entstehen durch eine mangelnde Absicherung dessen, dass alle Nutzer eine Unique ID haben und sich tracken lassen."
        },
        'definition': {
          'title': "Definition",
          'subtitle': "Bitte definieren Sie die kompensierenden Kontrollen und erläutern Sie, wie diese den Zielvorgaben der ursprünglichen Kontrolle sowie den erhöhten Risiken Rechnung tragen, soweit vorhanden. Dies ist zur Verifizierung dessen notwendig, dass die kompensierenden Kontrollen die durch den Compliance-Mangel gegenüber der ursprünglichen Anforderung erzeugten Restrisiken beseitigen.",
          'example': "z.B.: Firma XYZ hält alle Nutzer dazu an, sich mittels des SU-(Substitute User)-Befehls von ihren Desktop-Computern aus an den Servern einzuloggen. SU gestattet dem Nutzer den Zugang zum „Root“-Account (also zum Admin-Account) sowie das Ausführen von Aktionen unter demselben, lässt sich jedoch im SU-Log-Verzeichnis loggen. Auf diese Weise lassen sich die Aktionen jedes einzelnen Nutzers mittels des SU-Accounts tracken."
        },
        'validation': {
          'title': "Validierung",
          'subtitle': "Bitte definieren Sie, wie sich die beschriebenen kompensierenden Kontrollen validieren und testen lassen, um zu verifizieren, dass es sich um gültige Gegenmaßnahmen zur Kompensation der mangelnden Compliance gegenüber der ursprünglichen Anforderung handelt.",
          'example': "z.B.: Firma XYZ führt dem Gutachter vor, dass der SU-Befehl ausgeführt wird, und dass die Individuen, die den Befehl nutzen, geloggt werden, um zu identifizieren, dass das Individuum Aktionen via Root-Zugriffsrechten ausübt."
        },
        'maintenance': {
          'title': "Wartung",
          'subtitle': "Bitte definieren Sie alle eingesetzten Prozesse und Kontrollen zur Wartung der kompensierenden Kontrollen, wenn diese erst implementiert sind.",
          'example': "z.B.: Firma XYZ dokumentiert die Prozesse und Prozeduren zur Sicherstellung dessen, dass die SU-Konfigurationen nicht zu dem Zweck verändert, manipuliert oder entfernt werden, um individuellen Nutzern das Ausführen von Root-Befehlen ohne individuelles Tracking bzw. Logging zu ermöglichen."
        }
      }
  },
  'dashboard': {
      'leftup_merchant_status': "Ihr Händler-Status",
      'rightbottom_saq_completeness': "SAQ-Vollständigkeit",
      'rightup_title': "Es folgt",
      'rightup_message': "Zum Erreichen der Compliance erforderliche Aktionen",
      'rightup_message_saq_submit': "Reichen Sie Ihren SAQ-Fragebogen ein",
      'rightup_message_saq_complete': "Vervollständige deinen SAQ",
      'rightup_message_saq_download': "Laden Sie Ihren SAQ"
  }
};