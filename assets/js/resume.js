function downloadPDF() {			
    const pdfPath = './Documents/SaiSowjanya_Resume_.NET.pdf';
    const a = document.createElement('a');
    a.href = pdfPath;
    a.target = '_blank';
    a.download = 'SaiSowjanya_Resume_.NET.pdf';			
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    }

function sendEmail(){	
        
		emailjs.init("OmWOt-qyi0oNadP2_");

		const name = document.getElementById('name').value;
      	const email = document.getElementById('email').value;
      	const message = document.getElementById('message').value;

		const templateParams = {
					from_name: name,
					to_email: email,
					message: message,
				};

				if (!name || !email || !message) {
					alert('Please fill in all fields before sending message.');
					return;
				}

				emailjs.send("service_q1riy1o", "template_0j6bwch", templateParams)
					.then(response => {
					console.log('Email sent:', response);
					alert('Email sent successfully!');
					document.getElementById('name').value = '';
            		document.getElementById('email').value = '';
            		document.getElementById('message').value = '';
					})
					.catch(error => {
					console.error('Error sending email:', error);
					alert('Error sending email. Please try again.');
					});
				}		
        		