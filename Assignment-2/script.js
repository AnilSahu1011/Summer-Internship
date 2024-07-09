const name = document.getElementById("name");
      const mail = document.getElementById("mail");
      const phoneNumber = document.getElementById("phoneNumber");
      const dob = document.getElementById("dob");
      const save = document.getElementById("save");
      const cancel = document.getElementById("cancel");


      const profilePic = document.getElementById("profile");
      const inputFile = document.getElementById("inputType");
      // Trigger file input when the pencil image is clicked
      document.getElementById("pencil").onclick = () => {
        inputFile.click();
      };
      // Update profile picture when a new file is selected
      inputFile.onchange = () => {
        if (inputFile.files && inputFile.files[0]) {
          profilePic.src = URL.createObjectURL(inputFile.files[0]);
        }
      };

      document
        .getElementById("nameEditPencil")
        .addEventListener("click", () => {
          name.value = "";
          name.readOnly = false;
          name.focus();
        });

      document
        .getElementById("emailEditPencil")
        .addEventListener("click", () => {
          mail.value = "";
          mail.readOnly = false;
          mail.focus();
        });

      document
        .getElementById("phoneNumberEditPencil")
        .addEventListener("click", () => {
          phoneNumber.value = "";
          phoneNumber.readOnly = false;
          phoneNumber.focus();
        });

      document.getElementById("dobEditPencil").addEventListener("click", () => {
        dob.readOnly = false;
        dob.focus();
      });

      save.addEventListener("click", () => {
        if (
          name.value === "" ||
          mail.value === "" ||
          phoneNumber.value === "" ||
          dob.value === ""
        ) {
          alert("Please fill up all fields");
        } else {
          alert("Form submitted");
        }
      });

      cancel.addEventListener("click", () => {
        name.value = null;
        name.focus();

        mail.value = null;
        mail.focus();

        phoneNumber.value = null;
        phoneNumber.focus();

        dob.value = null;
        dob.focus();
      });