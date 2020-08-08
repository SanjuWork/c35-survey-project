// Creating a voter class
class Voter {
    
    // Creating an empty constructor 
    constructor() {}

    // Creating a funcction get count
    getCount() {
        var voterCountref = database1.ref('VoterCount');
        voterCountref.on("value", function(data) {
            VoterCount = data.val();
        });
    }

    // Creating a function update count
    updateCount(count) {
        database1.ref('/').update({
            VoterCount:count
        });
    }

    // Creating a function update to send the data to the firebase
    update(name,mail,age,mbn,question1,answer1,question2,answer2,question3,answer3,question4,answer4,question5,answer5,question6,answer6,question7,answer7,question8,answer8,question9,answer9,question10,answer10,question11,answer11,question12,answer12,question13,answer13) {
        var voterNumber = "Voter" + VoterCount;
        database1.ref(voterNumber).set({
            name:name,
            mail:mail,
            age:age,
            mbn:mbn,

            q1:{
                question:question1,
                answer:answer1
            },

            q2:{
                question:question2,
                answer:answer2
            },

            q3:{
                question:question3,
                answer:answer3
            },

            q4:{
                question:question4,
                answer:answer4
            },

            q5:{
                question:question5,
                answer:answer5
            },

            q6:{
                question:question6,
                answer:answer6
            },

            q7:{
                question:question7,
                answer:answer7
            },

            q8:{
                question:question8,
                answer:answer8
            },

            q9:{
                question:question9,
                answer:answer9
            },

            q10:{
                question:question10,
                answer:answer10
            },

            q11:{
                question:question11,
                answer:answer11
            },

            q12:{
                question:question12,
                answer:answer12
            },

            q13:{
                question:question13,
                answer:answer13
            }
        });
    }
}