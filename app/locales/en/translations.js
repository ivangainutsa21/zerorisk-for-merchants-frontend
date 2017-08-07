export default {
  'app': {
    'full_name': 'ZeroRisk for Merchants',
    'family_name': 'ZeroRisk',
    'unbranded_full_name': 'PCI DSS Platform',
    'button_yes': "Yes",
    'button_no': "No",
    'button_start': "Start",
    'button_next': "Next"
  },
  'locales': {
    'en': 'English',
    'fr': 'French',
    'de': 'German',
    'nl': 'Dutch'
  },
  'status': {
    'Compliant': 'Compliant',
    'NotCompliant': 'Not Compliant',
    'Enrolled': 'Enrolled',
    'NotEnrolled': 'Not Enrolled',
    'Closed': 'Closed',
    'asv_compliant': 'Passing',
    'asv_not_compliant': 'Not Passing'
  },
  'notification': {
    'no_notifications': "No notifications to display",
    'read_all': "Read all notifications"
  },
  'saq_status': {
    'pending': 'Pending',
    'completed': 'Completed',
    'submitted': 'submitted'
  },
  'messages': {
    'complete_wizard': "You must complete the enrollment wizard before using the application."
  },
  'menus': {
    'dashboard_subtitle': 'Your Merchant Home',
    'saq_subtitle': 'Manage your SAQs'
  },
  'enrollment': {
    'welcome': {
      'title': "welcome",
      'start_part_1': "You're here because you need to demonstrate your PCI DSS compliance to the cards industry.",
      'start_part_2': "By clicking <b>Start</b> you will initiate the enrollment procedure based on <b>3 simple steps</b>. This will allow your organisation to identify the correct PCI DSS Self Assessment Questionnaire (SAQ) and complete it.",
      'start_part_3': "Please take a few minutes to complete the journey and <i>fasten your seatbelts!</i>",
      'terms_and_conditions_part_1': "I accept the",
      'terms_and_conditions_part_2': "Terms and Conditions"
    },
    'user_details': {
      'title': "user details",
      'user_details_part_1': "Confirm your details",
      'user_details_part_2': "Please confirm your business details before proceeding, we will use these to generate the required PCI DSS documentation.",
      'user_details_part_3': "Why?",
      'user_details_part_4': "The PCI council and the cards schemes require eligible merchants to fulfill the so-called Self Assessment Questionnaire (or SAQ) on a yearly basis. <br> In fact, an important section of such document is represented by the Attestation of Compliance (or AOC) which includes business details information, such as legal contacts and business type (i.e. eCommerce or MOTO).",
      'user_details_part_5': "Completing a Self Assessment Questionnaire represents an assumption of responsibility towards the industry cards schemes, your financial institutions and your connected business partners.",
      'form_part_1': "Contact Information",
      'form_part_2': "Business Information",
      'company_name': "Company Name",
      'full_name': "Full Name (First name and Last name)",
      'email': "e-mail",
      'person_title': "Business Title",
      'dba': "DBA (Doing Business As)",
      'address': "Address",
      'country': "Country",
      'city': "City",
      'state_province': "State Province",
      'zip': "ZIP Code",
      'url': "Company Website URL",
      'phone': "Phone Number"
    },
    'saq_detection': {
      'title': "saq detection",
      'saq_detection_part1': "Next up",
      'saq_detection_part2': "Please take a few minutes to proceed with the rest of the enrollment wizard, we will guide you through simple questions so that we can identify the correct SAQ that matches your organisation and the way it stores, processes and transmits cardholder data (payment cards data).",
      'saq_detection_part3': "Your compliance journey",
      'saq_detection_part4': "While using the application, your organisation will evolve throughout a series of statuses, from the initial \"Not Enrolled\" status (this is what you are at this stage) to the \"Compliant\" status.",
      'saq_detection_part5': "Once a category of SAQ has been identified and assigned to your organisation, your status will become \"Enrolled\" and you will be just a few steps far from the PCI DSS Compliance!",
      'saq_detection_part6': "The application dashboard will present your status at any given point in time. Please note your goal is to become \"Compliant\". When being compliant, you will be able to download and submit your SAQ."
    }
  },
  'saq_editor': {
    'button_notapplicable': "Not Applicable",
    'button_compenstatingcontrol': "Compensating Control",
    'button_submit': "Submit SAQ",
    'button_submitted': "Submitted",
    'button_download': "Download",
    'how_to_answer': "How to answer",
    'button_submit_submittable': "You have completed the SAQ and you can now submit it.",
    'button_submit_downloadable': "You can download a copy of your SAQ by clicking here.",
    'hover_notapplicable': "Should this question not be applicable to your business, please select this option and provide a clear explanation in the following screen.",
    'hover_notapplicable_edit': "View provided justification for this Not Applicable answer.",
    'hover_compensatingcontrol': "If a componensating control is needed for this requirement, please select this option to provide all necessary information.",
    'hover_compensatingcontrol_edit': "If a componensating control is needed for this requirement, please select this option to provide all necessary information.",
    'not_applicable': {
      'title': "Explanation of Non-Applicability",
      'subtitle': "Explain why the related requirement is not applicable to your organization.",
      'example': "e.g. Additional media not utilised for the processing of payment transactions.",
    },
    'compensating_control': {
      'constraints': {
        'title': "Constraints",
        'subtitle': "Please list all constraints precluding compliance with the original requirement. Refer to the following example of constraints forcing the submission of a Compensating Control.",
        'example': "e.g. Company XYZ employs stand-alone Unix Servers without LDAP. As such, they each require a “root” login. It is not possible for Company XYZ to manage the “root” login nor is it feasible to log all “root” activity by each user."
      },
      'objective': {
        'title': "Objective",
        'subtitle': "Please define the objective of the original control linked to this requirement, in order to confirm the compensating control is acceptable and consistent with the original intent.",
        'example': "e.g. The objective of requiring unique logins is twofold. First, it is not considered acceptable from a security perspective to share login credentials. Secondly, having shared logins makes it impossible to state definitively that a person is responsible for a particular action."
      },
      'risks': {
        'title': "Risks",
        'subtitle': "Please include any additional risk posed by the lack of the original control, if any available. This is needed to also confirm the intent of this requirement is fully understood.",
        'example': "e.g. Additional risk is introduced to the access control system by not ensuring all users have a unique ID and are able to be tracked."
      },
      'definition': {
        'title': "Definition",
        'subtitle': "Please define the compensating controls and explain how they address the objectives of the original control and the increased risk, if any. This is needed to verify the compensating controls are eliminating the risk residue generated by the lack of compliance against the original requirement.",
        'example': "e.g. Company XYZ is going to require all users to log into the servers from their desktops using the SU command. SU allows a user to access the “root” account and perform actions under the “root” account but is able to be logged in the SU-log directory. In this way, each user’s actions can be tracked through the SU account."
      },
      'validation': {
        'title': "Validation",
        'subtitle': "Please define how the described compensating controls were validated and tested to confirm they are a valid countermeasure to the lack of compliance against the original requirement.",
        'example': "e.g. Company XYZ demonstrates to assessor that the SU command being executed and that those individuals utilizing the command are logged to identify that the individual is performing actions under root privileges."
      },
      'maintenance': {
        'title': "Maintenance",
        'subtitle': "Please define all process and controls in place to maintain compensating controls once implemented.",
        'example': "e.g. Company XYZ documents processes and procedures to ensure SU configurations are not changed, altered, or removed to allow individual users to execute root commands without being individually tracked or logged."
      }
    }
  },
  'dashboard': {
    'leftup_merchant_status': "Your merchant status",
    'rightbottom_saq_completeness': "Saq Completeness",
    'rightup_title': "Next up",
    'rightup_greatnews_title': "Great news",
    'rightup_greatnews_subtitle': "You are Compliant! Here's some actions you might find useful",
    'rightup_message': "Actions needed to become Compliant",
    'rightup_message_saq_submit': "Submit your SAQ",
    'rightup_message_saq_complete': "Complete your SAQ",
    'rightup_message_saq_download': "Download your SAQ"
  }
};
