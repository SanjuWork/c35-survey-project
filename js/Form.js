// Creatinng a function Form
function Form() {

    // Creating a display function
    this.display = function() {

        // Giving the title to the form
        var title = createElement('H2');
        title.html("A Survey To Bring About A Change");
        // Positioming the title
        title.position(40,0);

        // Creating an empty array
        var everything = [];

        // Creating different divs and inputs
        var nameInput = createInput(""), name = createDiv("Name"),
        button = createButton("SUBMIT"),
        namegreeting = createElement('H3'), mailgreeting = createElement('H3'),
        mailInput = createInput(""), mail = createDiv("E-Mail ID"),
        ageInput = createInput(""), age = createDiv("Age"),
        mbnInput = createInput(""), mbn = createDiv("Mobile Number"),
        question1 = createDiv("Do you think we need to have free lunch meals in the government offices for those people who are very poor? (YES/NO)"), question1Input = createInput(""),
        question2 = createDiv(" Would you be willing to contribute a small amount every month for such a program? (YES/NO)"), question2Input = createInput(""),
        question3 = createDiv("How much per month would you be willing to pay?"), question3Input = createInput(""),
        question4 = createDiv("Do you know about some of the initiatives taken by the government for poor people?"), question4Input = createInput(""),
        question5 = createDiv("If you were given a choice to change something in this world then what would you change?"), question5Input = createInput(""),
        question6 = createDiv("If you were made the Prime Minister of your country what would be the first thing you would do?"), question6Input = createInput(""),
        question7 = createDiv("How the Covid-19 pandemic today is affecting your life?"), question7Input = createInput(""),
        question8 = createDiv("What can be the role of democracy in this Covid-19 pandemic?"), question8Input = createInput(""),
        question9 = createDiv("What can we do to fix and possibly prevent this type of social issues?"), question9Input = createInput(""),
        question10 = createDiv("Who can help in fixing of social issues like hunger, homelessness, etc.?"), question10Input = createInput(""),
        question11 = createDiv("How strongly do you agree with the statement that the life for poor people today is very difficult?"), question11Input = createInput(""),
        question12 = createDiv("How satisfied are you with your life?"), question12Input = createInput(""),
        question13 = createDiv("What is the goal that you want to achieve in your life?"), question13Input = createInput("");
    
        // Pushing everything into everything
        everything.push(name,nameInput,button,mailInput,mail,age,ageInput,mbn,mbnInput,question1,question1Input,question2,question2Input,question3,question3Input,question4,question4Input,question5,question5Input,question6,question6Input,question7,question7Input,question8,question8Input,question9,question9Input,question10,question10Input,question11,question11Input,question12,question12Input,question13,question13Input);
        
        // Positioning every item in the form
        nameInput.position(130,80), name.position(85,80);
        mailInput.position(130,120), mail.position(60,120);
        button.position(60,1175);
        age.position(100,160), ageInput.position(130,160);
        mbn.position(20,200), mbnInput.position(130,200);
        question1.position(60,260), question1Input.position(60,285);
        question2.position(60,330), question2Input.position(60,355);
        question3.position(60,400), question3Input.position(60,425);
        question4.position(60,470), question4Input.position(60,495);
        question5.position(60,540), question5Input.position(60,565);
        question6.position(60,610), question6Input.position(60,635);
        question7.position(60,680), question7Input.position(60,705);
        question8.position(60,750), question8Input.position(60,775);
        question9.position(60,820), question9Input.position(60,845);
        question10.position(60,890), question10Input.position(60,915);
        question11.position(60,960), question11Input.position(60,985);
        question12.position(60,1030), question12Input.position(60,1055);
        question13.position(60,1100), question13Input.position(60,1125);

        // Calling mousePressed function
        button.mousePressed(function() {
            
            // Hiding everrything in the form
            for(var i = 0; i < everything.length; i++) {
                everything[i].hide();
            }

            // Taking the values of the inputs andd divs
            var nameu = nameInput.value(),
            mailu = mailInput.value(),
            ageu = ageInput.value(),
            mbnu = mbnInput.value(),
            question1u = question1.elt.textContent, question1Inputu = question1Input.value(),
            question2u = question2.elt.textContent, question2Inputu = question2Input.value(),
            question3u = question3.elt.textContent, question3Inputu = question3Input.value(),
            question4u = question4.elt.textContent, question4Inputu = question4Input.value(),
            question5u = question5.elt.textContent, question5Inputu = question5Input.value(),
            question6u = question6.elt.textContent, question6Inputu = question6Input.value(),
            question7u = question7.elt.textContent, question7Inputu = question7Input.value(),
            question8u = question8.elt.textContent, question8Inputu = question8Input.value(),
            question9u = question9.elt.textContent, question9Inputu = question9Input.value(),
            question10u = question10.elt.textContent, question10Inputu = question10Input.value(),
            question11u = question11.elt.textContent, question11Inputu = question11Input.value(),
            question12u = question12.elt.textContent, question12Inputu = question12Input.value(),
            question13u = question13.elt.textContent, question13Inputu = question13Input.value();
            
            // Updating the voter count
            VoterCount++;

            // Sending everything to the firebase
            voter.update(nameu, mailu, ageu, mbnu,question1u,question1Inputu,question2u,question2Inputu,question3u,question3Inputu,question4u,question4Inputu,question5u,question5Inputu,question6u,question6Inputu,question7u,question7Inputu,question8u,question8Inputu,question9u,question9Inputu,question10u,question10Inputu,question11u,question11Inputu,question12u,question12Inputu,question13u,question13Inputu);
            voter.updateCount(VoterCount);

            // Greeting the voter with soe greeting message
            namegreeting.html("'" + nameu + "', Thank You for the Response.");
            mailgreeting.html("The Mail ID you entered is '" + mailu + "'");
            namegreeting.position(130,160);
            mailgreeting.position(130,200);
        });
    }
}