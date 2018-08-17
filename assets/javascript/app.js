




var interval;

function countdown() {
    clearInterval(interval);
    interval = setInterval(function () {
        var timer = $('.js-timeout').html();

        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 1) seconds = '0' + seconds;

        $('.js-timeout').html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0) clearInterval(interval);
    }, 1000);

}

$('#js-startTimer').click(function () {
    $('.js-timeout').text("1:00");
    countdown();
});


$(document).ready(function () {
    var myQuestions = [{
        question: "What year was Lebron James drafted?",
        keyword: "2003",
        options: {
            a: '2003',
            b: '2004',
            c: '2005',
            d: '2006'
        },
        answer: 'a'
    },
    {
        question: "What year did the Cavs win the NBA Championship?",
        keyword: "2016",
        options: {
            a: '2007',
            b: '2015',
            c: '2016',
            d: '2017'
        },
        answer: 'c'
    },
    {
        question: "What year was Kyrie Irving Drafted?",
        keyword: "2011",
        options: {
            a: '2010',
            b: '2011',
            c: '2009',
            d: '2017'
        },
        answer: 'b'
    },
    {
        question: "What team did the Cavs trade Kyrie Irving to in 2017?",
        keyword: "celtics",
        options: {
            a: 'Warriors',
            b: 'Celtics',
            c: 'Thunder',
            d: 'Sixers'
        },
        answer: 'b'
    },
    {
        question: "What team did LeBron James go to in free agency 2010?",
        keyword: "Heat",
        options: {
            a: 'Warriors',
            b: 'Celtics',
            c: 'Thunder',
            d: 'Heat'
        },
        answer: 'd'
    },
    {
        question: "What team drafted Kevin Love?",
        keyword: "Timberwolves",
        options: {
            a: 'Warriors',
            b: 'Timberwolves',
            c: 'Thunder',
            d: 'Sixers'
        },
        answer: 'b'
    },
    {
        question: "Where did LeBron James go in free agency 2014?",
        keyword: "cavs",
        options: {
            a: 'Heat',
            b: 'Cavs',
            c: 'Thunder',
            d: 'Lakers'
        },
        answer: 'b'
    },
    {
        question: "Where did Kevin Love go to college?",
        keyword: "college",
        options: {
            a: 'Duke',
            b: 'UCLA',
            c: 'OSU',
            d: 'CSU'
        },
        answer: 'b'
    },
    {
        question: "Who is the Cavs all time leading scorer?",
        keyword: "score",
        options: {
            a: 'Kyrie',
            b: 'LeBron',
            c: 'Love',
            d: 'JR'
        },
        answer: 'b'
    },
    ]

    var questions = function () {
        for (i = 0; i < myQuestions.length; i++) {
            var h3 = $('<h3>')
            h3.text(myQuestions[i].question);
            $(".quiz-container").append(h3);
            var form = $('<form>').addClass(myQuestions[i].keyword)
            $(".quiz-container").append(form);
            Object.values(myQuestions[i].options).forEach(function (answer) {
                var choice = $(`<input type="radio">${answer}<br>`)
                choice.attr("name", myQuestions[i].keyword)
                choice.attr("value", answer)
                $(`.${myQuestions[i].keyword}`).append(choice)



            })
        }
    }
    questions()




});
//still gotta figure out how to grab the results of the quiz and show how much you got right and wrong
//loop thru the answers array and increment for each wrong and right answer

