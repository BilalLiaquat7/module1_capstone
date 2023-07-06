const speakers = [
  {
    id: 1,
    image: './assets/speaker1.png',
    name: 'Yohai Benkler',
    institute: 'Harvard Law School Professor',
    details:
      'Focusing on a common approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
  {
    id: 2,
    image: './assets/speaker2.png',
    name: 'Gilnam Jeon',
    institute:
      'Korea Advanced Institute of Science and Technology (KAIST) Emeritus Professor',
    details:
      'It opened the Internet era in earnest by developing Asias first internet protocol network SDN and leading the nations first dedicated line Internet connection in 1990.',
  },
  {
    id: 3,
    image: './assets/speaker3.png',
    name: 'Roh So-young',
    institute: 'Art Center Nabi Director, CC Korea Director',
    details:
      'As the author of <Digital Art, Art of Our Time>, he opened Art Center Nabi, the first digital art institution in Korea in 2000, and is currently working there.',
  },
  {
    id: 4,
    image: './assets/speaker4.png',
    name: 'Julia Leda',
    institute: 'Representative of the Young Pirates of Europe',
    details:
      'European integration and young peoples participation in politics and democracy online are major concerns, and he has published a report that will potentially affect the revision of the European Unions copyright law in July.',
  },
  {
    id: 5,
    image: './assets/speaker5.png',
    name: 'Lyla Treticov',
    institute: 'Secretary General of the Wikimedia Foundation',
    details:
      'Layla Treticov is the Executive Director of the Wikimedia Foundation, the non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​each month to over 100 million people, nearly half of the worlds population.',
  },
  {
    id: 6,
    image: './assets/speaker6.png',
    name: 'Ryan Merkly',
    institute: 'Creative Commons CEO, former Mozilla Foundation COO',
    details:
      'He led the open source project at the Mozilla Foundation and joined the CC CEO in 2014. He has been active in open movements such as open government and open source.',
  },
];

const speaker_section = document.getElementById('main');

const Speakers = () => {
  speakers.map((speaker) => {
    const oneSpeaker = document.createElement('div');
    oneSpeaker.classList.add('speakers_data');
    oneSpeaker.innerHTML = `
        <div>
            <img class="img" src="${speaker.image}"/>
        </div>
        <div class="details">
            <h3>${speaker.name}</h3>
            <span class="span">${speaker.institute}</span>
            <hr class="hr">
            <p class="p">${speaker.details}</p>
        </div>
        `;
    return speaker_section.appendChild(oneSpeaker);
  });
};

Speakers();
