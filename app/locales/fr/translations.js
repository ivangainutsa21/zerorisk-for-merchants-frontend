export default {
  'app': {
    'full_name': 'ZeroRisk pour Marchands',
    'family_name': 'ZeroRisk',
    'unbranded_full_name': 'Plateforme PCI DSS',
    'button_yes': "Oui",
    'button_no': "Non",
    'button_start': "Commencer",
    'button_next': "Suivant"
  },
  'locales': {
    'en': 'Anglais',
    'fr': 'Français',
    'de': 'Allemand',
    'nl': 'Néerlandais'
 },
  'status': {
  	'Compliant': 'Conforme',
  	'NotCompliant': 'Non Conforme',
  	'Enrolled': 'Inscrit',
  	'NotEnrolled': 'Non Inscrit',
  	'Closed': 'Fermé',
  	'asv_compliant': 'Valide',
  	'asv_not_compliant': 'Invalide'
  },
  'notification': {
    'no_notifications': "Aucune notification à afficher",
    'read_all': "Lire toutes les notifications"
  },
  'saq_status': {
    'pending': 'En cours',
    'completed': 'Terminé',
    'submitted': 'Soumis'
  },
  'messages': {
    'complete_wizard': "Vous devez terminer l'assistant d'inscription avant d'utiliser l'application."
  },
  'menus': {
    'dashboard_subtitle': 'Votre Accueil de Marchand',
    'saq_subtitle': 'Gérer vos SAQs'
  },  
  'enrollment': {
    'welcome': {
      'title': "Bienvenue",
      'start_part_1': "Vous êtes ici car vous devez démontrer votre conformité au PCI DSS au secteur des cartes.",
      'start_part_2': "En cliquant sur <b>Commencer</b>, vous débuterez la procédure d'inscription basée en <b>3 étapes simples</b>. Cela permettra à votre entreprise d'identifier le Questionnaire d'Auto-Evaluation PCI DSS (SAQ) adapté et de le remplir.",
      'start_part_3': "Veuillez prendre quelques minutes pour ce voyage et <i>attachez vos ceintures!</i>",
      'terms_and_conditions_part_1': "J'accepte les",
      'terms_and_conditions_part_2': "Conditions Générales"
    },
    'user_details': {
      'title': "Informations utilisateur",
      'user_details_part_1': "Confirmez vos informations",
      'user_details_part_2': "Veuillez confirmer les informations sur votre entreprise avant de poursuivre, nous les utiliserons pour générer la documentation PCI DSS requise.",
      'user_details_part_3': "Pourquoi?",
      'user_details_part_4': "Le conseil PCI et les systèmes de cartes demandent à ce que les marchands éligibles remplissent le Questionnaire d'Auto-Evaluation (ou SAQ) chaque année. <br> En fait, une importante section de ce document est représentée par l'Attestation de Conformité (ou AOC) qui comprend des informations détaillées sur l'entreprise, comme les contacts légaux et le type d'entreprise (càd, e-Commerce ou MOTO).",
      'user_details_part_5': "Remplir un Questionnaire d'Auto-Evaluation représente une prise de responsabilité envers le secteur des systèmes de cartes, vos institutions financières et vos partenaires commerciaux connectés.",
      'form_part_1': "Informations du Contact",
      'form_part_2': "Informations de l'Entreprise",
      'company_name': "Nom de l'Entreprise",
      'full_name': "Nom complet (Nom Prénom)",
      'email': "e-mail",
      'person_title': "Business Titre",
      'dba': "Faisant affaire sous la raison sociale (Doing Business As/DBA)",
      'address': "Adresse",
      'country': "Pays",
      'city': "Ville",
      'state_province': "État / Province",
      'zip': "Code Postal",
      'url': "Website URL",
      'phone': "Numéro de téléphone" 
    },
    'saq_detection': {
      'title': "Détection du SAQ",
      'saq_detection_part1': "Ensuite",
      'saq_detection_part2': "Veuillez prendre quelques minutes pour continuer le reste de l'assistant d'inscription, nous vous guiderons avec de simples questions afin d'être en mesure d'identifier le SAQ adapté à votre entreprise et la manière dont elle stocke, traite et transmet les données du porteur de carte (données des cartes de paiement).",
      'saq_detection_part3': "Votre avancement de conformité",
      'saq_detection_part4': "Pendant que vous utiliserez cette application, votre organisation évoluera parmi une série de statuts, depuis le statut initial \"Non Inscrit\" (ce qui est votre cas à ce stade) jusqu'au statut \"Conforme\".",
      'saq_detection_part5': "Une fois qu'une catégorie de SAQ aura été identifiée et assignée à votre organisation, votre statut passera à \"Inscrit\" et vous ne serez plus qu'à quelques pas de votre Conformité PCI DSS!",
      'saq_detection_part6': "Le tableau de bord de cette application vous présentera votre statut à n'importe quel moment. Veuillez noter que votre objectif est de devenir \"Conforme\". Une fois conforme, vous serez en mesure de soumettre et télécharger votre SAQ."
    }
  },
  'saq_editor': {
      'button_notapplicable': "Non Applicable",
      'button_compenstatingcontrol': "Contrôle Compensatoire",
      'button_submit': "Soumettre le SAQ",
      'button_submitted': "Soumis",
      'button_download': "Télécharger",
      'how_to_answer': "Comment répondre?",
      'button_submit_submittable': "Vous avez terminé le SAQ et vous pouvez maintenant le soumettre.",
      'button_submit_downloadable': "Vous pouvez télécharger une copie de votre SAQ en cliquant ici. Note: Jusqu'à le conseil PCI publie des versions officielles, le rapport (SAQ & AoC) sera généré en Anglais.",
      'hover_notapplicable': "Si cette question n'est pas applicable à votre entreprise, veuillez sélectionner cette option et fournir une explication claire sur l'écran suivant.",
      'hover_notapplicable_edit': "Voir la justification fournie pour cette réponse Non Applicable.",
      'hover_compensatingcontrol': "Si un contrôle compensatoire est nécessaire pour cette exigence, veuillez sélectionner cette option pour fournir toutes les informations nécessaires.",
      'hover_compensatingcontrol_edit': "View provided Compensating Controls for this answer.",
      'not_applicable': {
        'title': "Explication de Non-Applicabilité",
        'subtitle': "Expliquez pourquoi l'exigence en question n'est pas applicable à votre organisation.",
        'example': "Aucun média supplémentaire utilisé dans le traitement des transactions de paiement."
      },
      'compensating_control': {
        'constraints': {
          'title': "Contraintes",
          'subtitle': "Veuillez lister toutes les contraintes empêchant la conformité avec l'exigence originale. Référez-vous aux exemples suivants de contraintes forçant la soumission d'un Contrôle Compensatoire.",
          'example': "par exemple, la Compagnie XYZ utilise des Serveurs Unix autonomes sans protocole LDAP (Lightweight Directory Access Protocol). En conséquence, ils nécessitent chacun un identifiant \"root\". Il n'est ni possible pour la Compagnie XYZ de gérer l'identifiant \"root\" ni faisable d'enregistrer toutes les activités \"root\" pour chaque utilisateur."
        },
        'objective': {
          'title': "Objectif",
          'subtitle': "Veuillez définir l'objectif du contrôle original lié à cette exigence, afin de confirmer si le contrôle compensatoire est acceptable et cohérent avec l'intention originale.",
          'example': "par exemple, L'objectif de n'avoir que des identifiants uniques contient deux volets. Premièrement, il n'est pas considéré comme acceptable d'un point de vue sécurité de partager des informations d'identification. Deuxièmement, le fait d'avoir des identifiants partagé rend impossible de statuer de façon certaine sur la personne ayant effectué une action donnée."
        },
        'risks': {
          'title': "Risques",
          'subtitle': "Veuillez lister tout risque supplémentaire posé par l'absence du contrôle original, s'il y en a. Ceci est également nécessaire pour confirmer que l'intention de cette exigence est parfaitement comprise.",
          'example': "par exemple, Un risque supplémentaire est introduit dans le système de contrôle d'accès en ne s'assurant pas que tous les utilisateurs possèdent un identifiant unique que l'on puisse tracer."
        },
        'definition': {
          'title': "Définition",
          'subtitle': "Veuillez définir les contrôles compensatoires et expliquer comment ils répondent aux objectifs du contrôle original et les risques accrus, s'il y en a. Ceci est nécessaire pour vérifier que les contrôles compensatoires éliminent les risques résiduels causés par le manque de conformité sur l'exigence originale.",
          'example': "par exemple, la Compagnie XYZ demandera à ce que tous les utilisateurs se connectent aux serveurs depuis leurs bureaux en utilisant la commande SU (substitute user). SU permet à un utilisateur d'accéder au compte \"root\" et de réaliser des actions sous le compte \"root\" (càd administrateur) mais peut être enregistré dans le répertoire SU-log. De cette façon, toutes les actions de chaque utilisateur peuvent être tracées via le compte SU."
        },
        'validation': {
          'title': "Validation",
          'subtitle': "Veuillez définir comment les contrôles compensatoires décrits ont été validés et testés pour confirmer qu'ils forment une contre-mesure valide à l'absence de conformité sur l'exigence originale.",
          'example': "par exemple, la Compagnie XYZ démontre à l'auditeur que le fait d'exécuter la commande SU permet que les individus utilisant cette commande soient identifiés et permet de connaître l'individu derrière chaque action réalisée avec les privilèges root."
        },
        'maintenance': {
          'title': "Maintenance",
          'subtitle': "Veuillez définir tous les processus et contrôles mis en place pour maintenir les contrôles compensatoires une fois ceux-ci implémentés.",
          'example': "par exemple, la Compagnie XYZ documente les processus et procédures assurant que les configurations SU ne sont pas modifiées, altérées ou supprimées pour permettre à des utilisateurs individuels d'exécuter des commandes root sans être individuellement tracés ou enregistrés."
        }
      }
  },
  'dashboard': {
      'leftup_merchant_status': "Votre statut de marchand",
      'rightbottom_saq_completeness': "Complétude du SAQ",
      'rightup_title': "Prochainement",
      'rightup_greatnews_title': "Bonne nouvelle",
      'rightup_greatnews_subtitle': "Vous êtes Conforme! Voici quelques options qui pourront vous être utiles",
      'rightup_message': "Actions nécessaires pour devenir Conforme",
      'rightup_message_saq_submit': "Soumettez votre SAQ",
      'rightup_message_saq_complete': "Terminer votre SAQ",
      'rightup_message_saq_download': "Téléchargez votre SAQ"
  }
};