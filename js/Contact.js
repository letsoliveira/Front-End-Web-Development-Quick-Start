export default class Contact {
    constructor(form){
        this.fullName = form.elements["fullName"].value;
        this.email = form.elements["email"].value;
        this.subject = form.elements["subject"].value;
        this.body = form.elements["msg"].value;

    }
    fullName = "";
    email = "";
    subject = "";
    body = "";
    send(){
        console.info(this.formatMessage());
        document.getElementById("formInfo").innerHTML = "We're not sending emails yet...feature for version 2.";
    }
    formatMessage(){
        return `
            To: ${this.fullName}
            Email: ${this.email}
            Subject: ${this.subject}
            Body: ${this.body}
        `;
    }
}