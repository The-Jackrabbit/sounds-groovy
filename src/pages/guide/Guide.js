import React from 'react';
// import '../../App.css';
import sunset from '../../resources/images/cottage-vacation-kill-devil-hills.png';
import RecommendationCard from '../../components/recommendation-card/RecommendationCard';
import '../../components/recommendation-card/RecommendationCard.css';

const Guide = () => {
  return (
    <div className="topic">

      <div className="toc">
        <div className="button-wrapper">
          <h2>Outer Banks Guide</h2>

          <button>
            <a href="#breakfast">Breakfast</a>
          </button>
          <br/>

          <button>
            <a href="#lunch">Lunch</a>
          </button>
          <br/>

          <button>
            <a href="#dinner">Dinner</a>
          </button>
          <br/>

          <button>
            <a href="#crab">Crab Feast</a>
          </button>
          <br/>
        </div>
      </div>


      <div className="content">

        <div className="intro">
          <img alt="Guide-img" src={sunset}/>
          <h2>Our Favorite Places in the Outer Banks!</h2>
          <p>We love the people and places of the Outer Banks and
            wanted to share the best of the best with you.</p>
        </div>

        <div className="main">

          <span className="anchor" id="breakfast"></span>
          <div id="breakfast" className="main-lg">
            <h2>Breakfast</h2>
            <div className="grid-main-lg">
              <RecommendationCard
                title="Sam & Omie's"
                description='One of our favorite places, especially for
                            breakfast!  Get there early because it is
                            a favorite for both locals and visitors.'
                imageUrl='https://static.wixstatic.com/media/0775b0_7c7bdf9512ed36845a203d151276f5bb.jpg/v1/fill/w_768,h_576,al_c,lg_1,q_90/0775b0_7c7bdf9512ed36845a203d151276f5bb.webp'
                linkTo='http://www.samandomies.net/'
              />
              <RecommendationCard
                title="Dunes Restaurant"
                description='Another great place for breakfast!  Get there
                            early because it is a favorite for both locals
                            and visitors.'
                imageUrl='https://thedunesrestaurant.com/sites/default/files/styles/gallery_fullsize/public/business/gallery/exterior_shot.jpg?itok=4anHZL7r'
                linkTo='http://www.thedunesrestaurant.com/'
              />
              <RecommendationCard
                title="Grits Grill"
                description='A breakfast favorite!  Get there early because
                            it is a favorite for both locals and visitors.'
                imageUrl='http://www.gritsgrill.com/wp-content/uploads/2012/06/banner3.jpg'
                linkTo='http://www.gritsgrill.com/'
              />
            </div>

            <h2>Lunch</h2>
            <span className="anchor" id="lunch"></span>
            <div id="lunch" className="grid-main-lg">
              <RecommendationCard
                title="Dune Burger"
                description='Best burgers in town! Outer Banks original.'
                imageUrl='https://scontent-mia3-2.xx.fbcdn.net/v/t31.0-8/1052803_212096275609666_1310046472_o.jpg?_nc_cat=0&oh=0de993db16a31ee94a57eb669c08b6a5&oe=5BD2194E'
                linkTo='https://www.facebook.com/duneburgerobx'
              />
              <RecommendationCard
                title="Kill Devil Grill"
                description="The wings are awesome!! Give 'em a try!"
                imageUrl='http://thekilldevilgrill.com/cms/wp-content/gallery/interior/dynamic/New_Front_KDG01.jpg-nggid0266-ngg0dyn-200x150x100-00f0w010c011r110f110r010t010.jpg'
                linkTo='http://thekilldevilgrill.com/'
              />
              <RecommendationCard
                title="High Cotton Barbeque"
                description='So delicious!! Wonderful BBQ!'
                imageUrl='http://www.highcottonbbq.com/img/home_sliced.jpg'
                linkTo='http://www.highcottonbbq.com/'
              />
              <RecommendationCard
                title="Slice Pizzeria"
                description="This is amazing pizza! Definitely give it a try!!"
                imageUrl='https://static.wixstatic.com/media/fc48d3_128368fa50a04e89835b410e3fc1441d.jpg/v1/fill/w_346,h_415,al_c,lg_1,q_80/fc48d3_128368fa50a04e89835b410e3fc1441d.webp'
                linkTo='https://www.slicepizzeriaobx.com/'
              />
            </div>

            <h2>Dinner</h2>
            <span className="anchor" id="dinner"></span>
            <div id="dinner" className="grid-main-lg">
              <RecommendationCard
                title="Blue Moon Grill"
                description='The food is awesome!  We especially enjoy the
                            Specials on the menu.  When we go, we often sit
                            at the bar and enjoy the entertainment inherent
                            in a bar experience.'
                imageUrl='https://bluemoonbeachgrill.com/wp-content/uploads/2015/06/slider1.jpg'
                linkTo='https://www.bluemoonbeachgrill.com/'
              />
              <RecommendationCard
                title="Basnight's Lone Cedar Seafood Restaurant"
                description="We love the bar at this location because it is
                            generally not too crowded. The view can't be beat
                            if you are a naturalist -- right out the bar's
                            window's is an osprey's nest with a mom, dad and babies!!"
                imageUrl='http://lonecedarcafe.com/sites/default/files/styles/gallery_thumbnail/public/business/gallery/lone_cedar_2008-137.jpg?itok=1G_fEMpb'
                linkTo='http://lonecedarcafe.com/'
              />
              <RecommendationCard
                title="Mulligan’s Grille in Historic Cottage Row"
                description="Good food! Nice brunch! Live music!"
                imageUrl='https://mulligansobx.com/wp-content/uploads/obx-seafood-restaurant-bar-and-grille06-800x798.jpg'
                linkTo='https://mulligansobx.com/'
              />
              <RecommendationCard
                title="Miller’s Waterfront Restaurant"
                description="Love this place to see the sunset.  You can arrive in your boat and park it at their dock."
                imageUrl='https://millerswaterfront.com/wp-content/uploads/23736348_1658999807507757_9128707629957454109_o-500x500.jpg'
                linkTo='https://millerswaterfront.com/'
              />
            </div>

            <h2>Crab Feast Anyone!?!</h2>
            <span className="anchor" id="crab"></span>
            <div id="crab" className="grid-main-lg">
              <RecommendationCard
                title="Billy's Seafood"
                description="We love crabs! If you do too, check out Billy's to get
                            crabs for your very own crab feast!"
                imageUrl='http://www.billysseafoodobx.com/wp-content/uploads/2016/08/IMG_3518-768x576.jpg'
                linkTo='http://www.billysseafoodobx.com/'
              />
              <RecommendationCard
                title="Whalebone Seafood Market"
                description="When in season, every visit to the Outer Banks we get
                            crabs! There is nothing like a crab feast among family
                            and friends to make for a great vacation!"
                imageUrl='https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-0/c0.22.200.200/p200x200/19657098_1590440634322430_6778794518210222356_n.jpg?_nc_cat=0&oh=b417434c8f579cab959c432089fee105&oe=5C083FE5'
                linkTo='https://www.facebook.com/Whalebone-Seafood-Market-611160558917114/'
              />
              {/*<RecommendationCard*/}
              {/*title=""*/}
              {/*description=""*/}
              {/*imageUrl=''*/}
              {/*linkTo=''*/}
              {/*/>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;