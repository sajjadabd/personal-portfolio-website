$(document).ready(function(){


    // ----------------------------------------------------
    // Typed.Js

    var options = {
        strings: [
          '',
          '^500 Software ^500 Engineer^500',
          '^500 Web ^500 Developer^500' ,
          '^500 Game ^500 Maker^500' ,
          '^500 App ^500 Creator^500'
        ],
        typeSpeed: 150,
        backSpeed: 50,
        backDelay: 50,
        startDelay: 50,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    };

    var typed = new Typed('#typed', options);

    // ---------------------------------------
    // Scroll Spy

    inView.offset(200);

    inView('div.part')
    .on('enter', (el) => {
        //console.log(el.id);
        //$(`ul li a`).removeClass('active');
        $(`a[href='#${el.id}']`).addClass('active');
		$(`li a[href='#${el.id}']`).parent().addClass('active');
    })
    .on('exit', (el) => {
        $(`a[href='#${el.id}']`).removeClass('active');
		$(`li a[href='#${el.id}']`).parent().removeClass('active');
    });

    // -----------------------------------------
	// Add Skills

	frontend = [
	{ name : "HTML" , per : 90 },
	{ name : "CSS" , per : 80 },
	{ name : "Js" , per : 85 },
	{ name : "Sass" , per : 50 },
	{ name : "React.Js" , per : 80 },
	{ name : "Angular" , per : 60 },
	];

	let listOfSkills = ``;

	frontend.map( (value) => {
		listOfSkills += `
		<div class="skill">
		<div class="skillname">${value.name}</div>
		<div class="barContainer">
			<div class="bar">
				<div class="percent" per="${value.per}"></div>
			</div>
			<div class="percentContainer">%${value.per}</div>
		</div>
	</div>
		`;
	});

	$("#frontend").append(listOfSkills);


	backend = [
	{ name : "PHP" , per : 80 },
	{ name : "Laravel" , per : 50 },
	{ name : "Node.Js" , per : 70 },
	{ name : "Django" , per : 50 },
	];


	listOfSkills = ``;

	backend.map( (value) => {
		listOfSkills += `
		<div class="skill">
		<div class="skillname">${value.name}</div>
		<div class="barContainer">
			<div class="bar">
				<div class="percent" per="${value.per}"></div>
			</div>
			<div class="percentContainer">%${value.per}</div>
		</div>
	</div>
		`;
	});

	$("#backend").append(listOfSkills);



  database = [
	{ name : "SQL" , per : 90 },
	{ name : "Sqlite" , per : 90 },
	{ name : "MongoDb" , per : 70 },
	];


	listOfSkills = ``;

	database.map( (value) => {
		listOfSkills += `
		<div class="skill">
		<div class="skillname">${value.name}</div>
		<div class="barContainer">
			<div class="bar">
				<div class="percent" per="${value.per}"></div>
			</div>
			<div class="percentContainer">%${value.per}</div>
		</div>
	</div>
		`;
	});

	$("#database").append(listOfSkills);





	programming = [
	{ name : "C" , per : 70 },
	{ name : "C++" , per : 90 },
	{ name : "C#" , per : 80 },
	{ name : "Java" , per : 90 },
	{ name : "Python" , per : 90 },
	{ name : "Dart" , per : 60 },
	];


	listOfSkills = ``;

	programming.map( (value) => {
		listOfSkills += `
		<div class="skill">
		<div class="skillname">${value.name}</div>
		<div class="barContainer">
			<div class="bar">
				<div class="percent" per="${value.per}"></div>
			</div>
			<div class="percentContainer">%${value.per}</div>
		</div>
	</div>
		`;
	});

	$("#programming").append(listOfSkills);







	mobile = [
	{ name : "React Native" , per : 70 },
	{ name : "Ionics" , per : 50 },
	{ name : "Flutter" , per : 60 },
	];


	listOfSkills = ``;

	mobile.map( (value) => {
		listOfSkills += `
		<div class="skill">
		<div class="skillname">${value.name}</div>
		<div class="barContainer">
			<div class="bar">
				<div class="percent" per="${value.per}"></div>
			</div>
			<div class="percentContainer">%${value.per}</div>
		</div>
	</div>
		`;
	});

	$("#mobile").append(listOfSkills);



	// ------------------------------ Set Skill Bars Percentage


    $("div.percent").each( function () {
        $(this).css("width", $(this).attr('per') + '%' );
	});


	//------------------------------------------------------------------

	let listOfMyEducations = ``;

	myEducations = [
		{ major : 'Mathematics' , img : './img/shahed.jpg' ,
		 uni : 'Shahed High School' , date : '2007-2010' } ,
		{ major : 'Software Engineering' , img : './img/umz.jpg' ,
		 uni : 'University Of Mazandaran' , date : '2010-2013' } ,
		{ major : 'Software Engineering' , img : './img/azad.jpg' ,
		 uni : 'Azad University Of Neka' , date : '2017-2020' } ,
	];


	myEducations.map( (value) => {
		listOfMyEducations += `
		<div class="item">
			<div class="major"><span class="badge">${value.major}</span></div>
			<div class="image">
				<img src="${value.img}" alt="${value.uni}">
			</div>
			<div class="uni">${value.uni}</div>
			<div class="date">${value.date}</div>
		</div>
		`;
	});



	$("#myEducations").append(listOfMyEducations);






	//-------------------------------------------


	experiences = [
		{
			name : "Mobile App for Selling Questions" ,
			href : "",
			img : './img/react-native.jpg' ,
				comment : `FanniHerfei Question Selling App is written in React Native with Page
				 Navigation for Profile and Bookmarks with lots of theming , Main purpose of the app
				  is for selling questions of seasons and branches`,
			subtitles : [
			  'Creation of Mobile app with React Native',
			  'Platform for users to Buy and Read Questions'
			],
			technologies : [
			  'React Navigation for Transfer between pages',
			  'Style components for theming',
			  'Redux for theming and storing global variables',
			  'Axios for sending AJAX requests',
			  'Clean Code written'
			],
			achievements : [
			  'In App Billing for Buying Questions',
			  'Theming the Software for beautiful Colors',
			  'Ability to save questions and branches',
			  'SMS sending for user authentication'
			],
		  },
		  {
			name : "Server written in Node.js" ,
			href : "",
			img : './img/node.jpg' ,
				comment : `Server is for FanniHerfei Question Selling App written in Node.js with Express Framework
				Responding JSON to App Requests and control the user to response saved bookmarks and buying stuff`,
			subtitles : [
			  'API for serving requests and admin panel for control',
			],
			technologies : [
			  'Node.js with Express Framework',
			  'Sequelize for database CRUD',
			  'Restful Interface with JSON responses',
			  'EJS for Templating Admin panel',
			  'Passport for admin authentication',
			  'Git for configuration and documentation versioning',
			  'Clean Code written'
			],
			achievements : [
			  'Latex to Json Converter',
			  'Add thousand Items in Database with json file uploading',
			],
		  },
		{
      name : "Neka Beauty" ,
      href : "https://nekabeauty.com",
      img : './img/nekabeauty.jpg' ,
		  comment : `nekabeauty is an online cosmetics retail shop written in PHP
                 with self made framework with MySQL in back-end ,
                 works perfectly with AJAX requests and JSON`,
      subtitles : [
        'creation of online shop for buying cosmetics'
      ],
      technologies : [
        'self made PHP framework (backend is a REST interface)',
        'jQuery with AJAX and JSON for the easy frontend interaction',
        'HTML5/CSS3 for the frontend'
      ],
      achievements : [
        'ability for users to sign up with their phone number',
        'custom made CMS for Managing The Shop',
        'load products on scroll'
      ],
    },
		{
      name : "ChessPlus" ,
      href : "https://chessplus.herokuapp.com",
      img : './img/chess.jpg' ,
		  comment : `ChessPlus is an online Chess Game Written in Node.Js
                 with Express Framework react as fast as possible to the
                 changes in the game`,
      subtitles : [
        'good platform for chess players to play online with super fast speed'
      ],
      technologies : [
        'Node.js for back-end developement',
        'Socket.io for transferring messages',
        'Flexbox and CSS Grid front-end Design',
        'Git for configuration and documentation versioning'
      ],
      achievements : [
        'suggestion for chess pieces to go in the board'
      ],
    },
	{
      name : "Chatbox" ,
      href : "https://masterchatbox.herokuapp.com",
      img : './img/chatbox.jpg' ,
		  comment : `Chatbox is an online Messaging App Written in Node.Js
                 with Express Framework works perfectly sending and recieving
                 messages across the internet`,
      subtitles : [
        'providing messaging system for a large infrastructure'
      ],
      technologies : [
        'Node.js for back-end developement',
        'Socket.io for transferring messages',
        'Flexbox and CSS Grid for front-end Design'
      ],
      achievements : [
        'personal chats',
      ],
    },
		{
      name : `Hokm Card Game` ,
      href : "https://hokmcardgame.herokuapp.com",
      img : './img/cards.jpg' ,
		  comment : `Hokm is an online iranian card game written in
                 Modern Javascript using Latest CSS Technologies
                 and present the best experience to the user for
                 playing a card game`,
      subtitles : [

      ],
      technologies : [

      ],
      achievements : [

      ],
    }
	];


  let loadListItems = (items) => {
    let template = `<ul>`
    template += items.map((value) => {
      return `<li>${value}</li>`;
    }).join("");
    template += `</ul>`
    return template;
  }


	let listOfExperiences = ``;

	experiences.map( (value) => {
		listOfExperiences += `
		<div class="item">
			<div class="image">
				<img src="${value.img}" alt="${value.name}">
			</div>
			<div class="title">
				Created
        <code>
          <a href='${value.href}' target="_blank">${value.name}</a>
        </code>
			</div>
			<div class="comment">
				${value.comment}
			</div>
      <div class="titles">
        ${value.subtitles.length > 0 ? loadListItems(value.subtitles) : `` }
      </div>
      <div class="technologies">
        ${value.technologies.length > 0 ? `<div>Technologies : </div>` : `` }
        ${value.technologies.length > 0 ? loadListItems(value.technologies) : `` }
      </div>
      <div class="achievements">
        ${value.achievements.length > 0 ? `<div>Achievements : </div>` : `` }
        ${value.achievements.length > 0 ? loadListItems(value.achievements) : `` }
      </ul>
      </div>
		</div>
		`;
	});


	$("#myExperiences").append(listOfExperiences);

	//------------------------------------------------------------

	// let body = document.body,
	// 	html = document.documentElement;

	// let height = Math.max( body.scrollHeight, body.offsetHeight,
	// 					html.clientHeight, html.scrollHeight, html.offsetHeight );

	// console.log(height);

	// $('aside').css('height', height + 'px');


	//console.log(document.body.clientWidth);



});
