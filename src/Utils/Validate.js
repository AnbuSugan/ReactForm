export default function validate(values) {
  let errors = {};

  if (!values.date.trim()) {
    errors.date = "Date is required";
  }

  if (!values || !values.compaignTitle || !values.compaignTitle.trim()) {
    errors.compaignTitle = "Campaign Title is required";
  }

  if (!values || !values.firstName || !values.firstName.trim()) {
    errors.firstName = "First Name Is Required";
  }

  if (!values || !values.lastName || !values.lastName.trim()) {
    errors.lastName = "Last Name Is Required";
  }
  var phonePattern = /^\d{10}$/;
  if (
    !values ||
    !values.phoneNumber ||
    !values.phoneNumber.trim() ||
    !phonePattern.test(values.phoneNumber)
  ) {
    errors.phoneNumber = "Phone Number Is Required";
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email || !emailPattern.test(values.email)) {
    errors.email = "Email is Required or Invalid";
  }

  if (!values || !values.verification || !values.verification.trim()) {
    errors.verification = "verification Is Required";
  }

  if (!values.specialText || !values.specialText.trim()) {
    errors.specialText = "Special Element Text is Required";
  }
  if (!values.spotTextarea || !values.spotTextarea.trim()) {
    errors.spotTextarea = "Additional Spot/Traffic Info is Required";
  }
  var mediaOptions = document.getElementsByName("mediaOptions");
  var mediaSelected = false;

  for (var i = 0; i < mediaOptions.length; i++) {
    if (mediaOptions[i].checked) {
      mediaSelected = true;
      break;
    }
  }

  if (!mediaSelected) {
    errors.mediaOptions = "Please choose any advertising option";
  } else {
    errors.mediaOptions = null;
  }
  var lengthBox = document.getElementsByName("lengthBox");
  var lengthSelected = false;

  for (var i = 0; i < lengthBox.length; i++) {
    if (lengthBox[i].checked) {
      lengthSelected = true;
      break;
    }
  }

  if (!lengthSelected) {
    errors.lengthBox = "Please choose any length option";
  } else {
    errors.lengthBox = null;
  }
  var voiceTalentBox = document.getElementsByName("voiceTalentBox");
  var voiceSelected = false;

  for (var i = 0; i < voiceTalentBox.length; i++) {
    if (voiceTalentBox[i].checked) {
      voiceSelected = true;
      break;
    }
  }

  if (!voiceSelected) {
    errors.voiceTalentBox = "Please choose the number of voice talents needed.";
  } else {
    errors.voiceTalentBox = null;
  }
  var spotOption = document.getElementsByName("spotOption");
  var spotSelected = false;

  for (var i = 0; i < spotOption.length; i++) {
    if (spotOption[i].checked) {
      spotSelected = true;
      break;
    }
  }

  if (!spotSelected) {
    errors.spotOption = "Please choose an option.";
  } else {
    errors.spotOption = null;
  }

  return errors;
}
