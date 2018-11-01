// intro
import sound_view from '../../resources/images/vacation-rental-outer-banks-nags-head.JPG';
import laundry from '../../resources/videos/Laundry.mov';
import laundry_poster from '../../resources/videos/Laundry.png';
import closet from '../../resources/videos/Master Bedroom Closet.mov';
import closet_poster from '../../resources/videos/Master Bedroom Closet.png';
import back_of_house from '../../resources/videos/Back of House.mov';
import back_of_house_poster from '../../resources/videos/Back of House.png';
import entry_stairs from '../../resources/videos/EntryStairs.mov';
import entry_stairs_poster from '../../resources/videos/EntryStairs.png';
import becky_and_dave from '../../resources/images/Becky and Dave/Becky and Dave.jpeg';
import young_becky_and_dave from '../../resources/images/Becky and Dave/Young Beck and Dave.jpeg';


export const intro = {
  header: 'The Sounds Groovy OBX Vacation Rental Blog',
  src: sound_view,
  description: `
    Become a part of our history.
    `
};

export const blogs = [
  // order counts

  // start blog entry
  {
    title: 'Beach House Renovation - Entry Stairs',
    date: 'September 21, 2018',
    parts: [
      {
        body: [
          // start blog section
          {
            para: `
              Some of the beach house renovations are decorative and some are functional.  The entry
              stairs to the home are definitely in need of replacement.  We love the canal views and
              outdoor living at Sounds Groovy OBX, so one of the changes we are anticipating is
              the deck rails are being replaced with a less visually obstructive cable railing material.
            `,
            video: entry_stairs,
            poster: entry_stairs_poster,
          }
        ]
      }
    ]
  },
  // start blog entry
  {
    title: 'Laundry Room',
    date: 'September 20, 2018',
    parts: [
      {
        subtitle: 'Beach House Renovation',
        body: [
          // start blog section
          {
            para: `
              The laundry area is right inside the main entry way into the home.  We have always had a
              to place purses or bags on when you first enter the home.  The louver doors have always
              fit when opened while doing laundry.  We are replacing the louver doors with opaque
              hoping they are functional and do not intrude too much into the hallway.
            `,
            video: laundry,
            poster: laundry_poster,
          },
          // start blog section
          {
            para: `
              The renovation is being done by 
              <a href='http://www.sethjohnsonconstructioninc.com/'>Seth Johnson Construction</a>,
              who is starting work inside while waiting on permits
              from CAMA and the Town of Nags Head for the outside work.
            `,
          },
        ],
      }
    ]
  },

  // start blog entry
  {
    title: 'Beach House Renovation - Hurricane Florence',
    date: 'September 17, 2018',
    parts: [
      {
        subtitle: 'Making it Better',
        body: [
          // start blog section
          {
            para: `
              Hurricane Florence delayed the start of renovations, but only by a few days!  We
              arrived on Saturday, September 15, mid-day to begin packing out the house, so that
              <a href='http://www.sethjohnsonconstructioninc.com/'>Seth Johnson Construction</a>
              could get started mid-week with the renovations.  The renovation will include
              a new kitchen, flooring throughout, enhanced outdoor living spaces, new outdoor stairs
              and deck railing. We anticipate that it will take 3 - 4 months.
            `,
          }
        ]
      }
    ]
  },

  // start blog entry
  {
    title: 'A Quick Rental Season',
    date: 'July 1, 2018',
    parts: [
      {
        subtitle: 'Why Host?',
        body: [
          // start blog section
          {
            para: `
              We wanted to start having guests stay at Sounds Groovy 
              OBX in the lull while we wait to get started on renovations 
              beginning in September 2018.  It will give us a chance to 
              figure out how to host and to find out whether or not it is 
              something we will enjoy.  Why rent you might
              wonder?  Well, financially, it will certainly help with 
              the costs of renovations.
            `
          },
          // start blog section
          {
            para: `
              However, we have a slightly different, more driving 
              reason.  For most of
              our memories, the house was the embodiment of love 
              and laughter and fun 
              times, but over the past few years it became a 
              place of sickness, death and crushing loss.
              As a family, we want to return the house to a 
              place of joy, for us and for others.  We think that 
              Becky and Dave would
              love that their home was being enjoyed.
              The home is an amazing place
              that should be enjoyed by others, if we are not able to
              be there.
             `,
            img: sound_view,
          }
        ]
      },
    ],
  },

  // start blog entry
  {
    title: 'A History Lesson',
    date: 'June 1, 2018',
    parts: [
      {
        subtitle: 'History of the House',
        body: [
          // start blog section
          {
            para: `
              The home was built in 1984. It was purchased from the builder by Becky
              and Dave Masters. Upon their deaths in 2017, Becky and Dave's sons, David and Mark
              inherited the home. Michele, Mark's wife, purchased David's half in 2018. The home
              is now owned by Mark and Michele Masters. In time, Mark and Michele's three children,
              Maria, Gina and Luke will take ownership of the home. We hope to keep this home in
              our family and our hearts for many years to come!
            `
          }
        ]
      },
      {
        subtitle: 'Dave and Becky Masters',
        body: [
          // start blog section
          {
            para: `
              Dave and Becky, originally from South Carolina, moved to Washington, DC as a young
              couple for Dave to pursue, what turned out to be, a very successful career with 
              <a
                href='https://www.pepco.com'>
                Pepco</a>.
                The Potomac Electric
              Power Company, Pepco, is a public utility that supplies electric power to the city of
              Washington, D.C. and to surrounding communities in Maryland.  At that point, in the
              1950's, they began to vacation in the Outer Banks of North Carolina.  They both
              appreciated the natural, undeveloped beach atmosphere, and, the deep sense of community
              of the local residents.
            `,
            img: young_becky_and_dave
          },
          // start blog section
          {
            para: `
              It was at that point, in the late
              1950's, that they began to vacation in the Outer Banks of North Carolina.  
              They both
              appreciated the natural, undeveloped beach atmosphere, and, the 
              deep sense of community of the local residents.
              `,
          },
          // start blog section
          {
            para: `
              Until the early 1970's,
              the young family would stay at the 
              <a href='https://www.facebook.com/SeeSeaMotel/'>See Sea Motel in Kitty Hawk, NC</a>,
              which is still there.  It was recently renovated, so it looks just as
              cute as it did back in the day.  Eventually, a motel room was just not
              large enough for the growing family, so they began to rent an ocean front
              cottage from Skylark Cottages.  
              The family would vacation in the Outer Banks for the first two weeks of
               August.  It was a major logistical accomplishment because
              there were no easily accessible grocery stores.  Becky would need to
              plan out all the meals and snacks for the two weeks, to include 
              required cooking implements. As she would plan and execute the vacation, one
              can only imagine how she must have been dreaming of the day she would one day
              live in the Outer Banks year round.
              Becky and Dave moved to the Outer Banks, as full-time residents, in 1991.
            `,
          },
        ]
      },
    ]
  },

  // start blog entry
  {
    title: 'Welcome to Our Story!',
    date: 'May 1, 2018',
    parts: [
      {
        subtitle: 'Why Sounds Groovy OBX?',
        body: [
          // start blog section
          {
            para: `
              So why did we name our beach house 'Sounds Groovy OBX' you might wonder? Well for one thing
              the house sits on the main canal, Marlin Waterway, leading out to the Albemarle Sound, so
              therefore the word, 'Sounds'.
            `,
          },
          {
            img: becky_and_dave,
            para: `
              'Groovy' because for over 30 years this was home to the
              coolest, most loving grandparents ever!
              Becky and Dave Masters were wonderfully free spirits!
            `,
          },
          {
            para: `
              Sounds Groovy is an acknowledgement
              of all the beauty and kindness they shared while they were with us. They enjoyed fishing,
              beaching, and love and laughter.
            `,
          },
          {
            para: `
              Hopefully you will experience that and much more when
              you visit Sounds Groovy OBX!
            `,
          },
        ]
      }
    ]
  },

];


/*


  // start blog entry
  {
    title: 'Master Bedroom Closet',
    date: 'September --, 2018',
    parts: [
      {
        subtitle: 'Beach House Renovation',
        body: [
          // start blog section
          {
            para: `
              Not a lot of change here, mostly paint to brighten it up and new flooring.
              We will enjoy it though!
            `,
            video: closet,
            poster: closet_poster,
          }
        ]
      }
    ]
  },

  // start blog entry
  {
    title: 'Back of House',
    date: 'September --, 2018',
    parts: [
      {
        subtitle: 'Beach House Renovation',
        body: [
          // start blog section
          {
            para: `
              Lots of changes here!
              `
            video: back_of_house,
            poster: back_of_house_poster,
          },
          {
            para: `
              We are moving the mechanical units
              to the front of the house.  Through the years, the units
              have been noisy and disruptive during family gatherings
              such as crab feasts.  At the front of the house they will
              away from the central gathering areas and, hopefully, less
              noisy.
            `,
          },
          {
            para: `
              We are extending the entrance deck past the canal bedroom
              to the new deck we are adding outside the office.
            `,
          }
        ]
      }
    ]
  },


 */