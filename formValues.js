
            
            
            var form = document.querySelector('form');
            document.querySelector('#contactus-form').addEventListener("submit",submitForm);

            function submitForm(e){
            e.preventDefault();

            //Get form values
            var fname = form.elements[0].value;
            var lname = form.elements[1].value;
            var email = form.elements[2].value;
            var tel = form.elements[3].value;
            var message = form.elements[4].value;

         var outputmsg = {

                Name : fname,
                Email : email,
                Phone : tel,
                Message : message,
            
            }

            console.log(outputmsg);

            // Form Submit STATUS & Form REFRESH
            var status =  document.getElementById('status');
        
            status.classList.add('success')
            status.innerHTML = `Thanks, Your request has been received ${fname}`;
            



            form.reset();

            
            
        }