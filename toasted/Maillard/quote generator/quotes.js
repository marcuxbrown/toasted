//Use an array to hold the value of the quotes
const arrayOfQuotes = [
  {'author': 'E.V. Lucas',
   'quote': '...the noise from good toast should reverberate in the head like the thunder of July.'
  },
  {'author': 'Steven Wright',
   'quote': 'If toast always lands butter-side down, and cats always land on their feet, what happens if you strap toast on the back of a cat and drop it?'
  },
  {'author': 'Elizabeth David ',
   'quote': 'It isn\'t only fictional heroes to whom toast means home and comfort. It is related of the Duke of Wellington - I believe by Lord Ellesmere - that when he landed at Dover in 1814, after six years\' absence from England, the first order he gave at the Ship Inn was for an unlimited supply of buttered toast.'
  },
  {'author': 'Mimi Sheraton',
   'quote': 'Toast was a big item in my mother\'s culinary pharmacopeia. At first it was served plain and dry, but that was soon followed by crisp, sweet cinnamon toast, they baby-bland toast that tasted soothingly of fresh air. Thick slices of French toast, crisp and golden outside but moist and eggy within, would probably come next, always topped with a melting knob of sweet butter and a dusting of confectioner\'s sugar. I knew I was close to recovery when I got the toast I liked best -- almost-burned rye bread toast covered with salt butter.'
  },
  {'author': 'Matthew Prior',
   'quote': 'I never strove to rule the roast, She ne\'er refus\'d to pledge my toast.'
  },
  {'author': 'Fran Lebowitz',
   'quote': 'Do you know on this one block you can buy croissants in five different places? There\'s one store called Bonjour Croissant. It makes me want to go to Paris and open up a store called Hello Toast.'
  },
  {'author': 'John Thorne',
   'quote': 'Unbuttered toast is a substance half complete, and to be forced to eat it in that state is necessarily to feel deprived.'
  },
  {'author': 'Wilkie Collins',
   'quote': 'My hour for tea is half-past five, and my buttered toast waits for nobody.'
  },
  {'author': 'Margaret Atwood',
   'quote': 'Toast was a pointless invention from the Dark Ages. Toast was an implement of torture that caused all those subjected to it to regurgitate in verbal form the sins and crimes of their past lives. Toast was a ritual item devoured by fetishists in the belief that it would enhance their kinetic and sexual powers. Toast cannot be explained by any rational means.'
  },
  {'author': 'Anthony T. Hicks',
   'quote': 'Butter was meant to be spread.'
  },
  {'author': 'Peter O\'Toole',
     'quote': 'I can make the best French toast.'
  },
  {'author': 'Yungblud',
     'quote': 'From a young age, I was always very transparent, and that\'s why the kids\' mums didn\'t like me. I would tell you if I didn\'t like your beans on toast.'
    },
    {'author': 'Kourtney Kardashian',
     'quote': 'I was surprised that everyone calls it \'morning sickness,\' because it lasted all day. For me, it was even worse at night. During my first two pregnancies, I felt so nauseous all day that I could only eat plain toast and bland foods - no proteins.'
    },
    {'author': 'James Turrell',
     'quote': 'My mother did not have a toaster oven and would toast bread in the oven, which I thought was stupid. They didn\'t do cars and electricity, that kind of stuff.'
    },
    {'author': 'Lewis Hamilton',
     'quote': 'My daily breakfast is two poached eggs in the morning with half an avocado, and I get to have half a piece of toast.'
    },
    {'author': 'Alanis Morissette',
     'quote': 'For four to six months at a time, I would barely eat. I lived on a diet of Melba toast, carrots, and black coffee.'
    },
    {'author': 'Molly Sims',
     'quote': 'I love toast.'
    },
    {'author': 'Erin O\'Connor',
     'quote': 'I was making cheese on toast when flames escaped from the grill. My father stopped the fire with blind panic and excessive water. I was forgiven, but it put me off cooking for years. '
    },
    {'author': 'Tiffani Thiessen',
     'quote': 'Being from California, avocado toast is very popular in our house. We have it almost every morning. '
    },
    {'author': 'Ellen Stofan',
     'quote': 'To avoid congestion, I get up at 5:10, grab a slice of raisin toast, and leave the house at 6 A.M. My husband, Tim Dunn, who works for an environmental agency, is still asleep when I slip out, and I find that rather annoying.'
    },
    {'author': 'Jay Sean',
     'quote': 'I eat a lot of cereal and toast.'
    },
    {'author': 'Danielle Macdonald',
     'quote': 'I think avocado toast is the best ever. It\'s my favorite.'
    },
    {'author': 'Leandra Medine',
     'quote': '... with Instagram, I feel reluctant to make all the photos beautiful because I don\'t necessarily want to send this message that life is perfect and your avocado toast is always going to be beautifully lit.'
    },
    {'author': 'Jon Richardson',
     'quote': 'It would be nice to be a piece of toast. Everyone likes a piece of toast, don\'t they? No one is ever sad when you offer them a piece of toast, and if I could be that to someone, that would be nice.'
    },
    {'author': 'Naveen Andrews',
     'quote': 'A slice of hot, buttered toast is the perfect meal. It\'s not too much and not too little, and it gives you just the right buzz.'
    },
    {'author': 'Daniel Rigby',
     'quote': 'What sticks in my mind from seeing the Teletubbies is Tinky Winky\'s handbag and Tubby Custard. I always remember wanting to have a glass of Tubby Custard and some Tubby Toast in the morning.'
    },
    {'author': 'Irma S.Rombauer',
     'quote': 'The automatic bread maker is not as good as breads made by hand, but waking up to the smell of fresh bread is worth the price of admission. We use it for fresh cinnamon raisin toast - mmmmmmm!'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `**${arrayOfQuotes[random].author}**`;

}
