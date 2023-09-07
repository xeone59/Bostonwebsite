import './History.css';
import image from './images/tiffany-chan-lT2hiMUACco-unsplash.jpg';

function History( {setPage} ){
   return(

    <div className="container"  id="maincontent">
      
      <img className="history__image" src={image} alt="Street in snow" />
      <p className="text">
      <p className="text1">
      The written history of Boston begins with a letter drafted by the first European inhabitant of the Shawmut Peninsula, William Blaxton. This letter is dated 7 September 1630 and was addressed to the leader of the Puritan settlement of Charlestown, Isaac Johnson. The letter acknowledged the difficulty in finding potable water on that side of Back Bay. As a remedy, Blaxton advertised an excellent spring at the foot of what is now Beacon Hill and invited the Puritans to settle with him on Shawmut. Boston was named and officially incorporated on September 30, 1630. The city quickly became the political, commercial, religious, and educational center of Puritan New England and grew to play a central role in the history of the United States.
      </p>
      <p className="text2">
      When harsh British retaliation for the Boston Tea Party resulted in further violence by the colonists, the American Revolution erupted in Boston. Colonists besieged the British in the city, fighting a famous battle at Breed's Hill in Charlestown on June 17, 1775—a battle lost by the colonists but one that inflicted great damage on British forces. The colonists later won the Siege of Boston, forcing the British to evacuate the city on 17 March 1776. However, the combination of American and British blockades of the town and its port during the conflict seriously damaged the economy, leading to the exodus of two-thirds of its population in the 1770s. The city recovered after 1800 and re-established its role as the transportation hub for New England with a network of railroads. Beyond a renewed economic success, the re-invigorated Boston became the intellectual, educational, and medical center of the nation. Along with New York, Boston became the financial center of the United States in the 19th century, and the large amount of capital available for investment there was crucial in funding the expansion of a nationwide railroad.
      </p>
      <p className="text3">
      During and before the Civil War, Boston was the launching pad and funding base for many of the country's anti-slavery activities. In the 19th century, city politics and society became dominated by a financial elite known as the Boston Brahmins. This entrenched power base squared off against the political challenge of more recent Catholic immigrants for the rest of the 19th century. Wealthy Irish Catholic political dynasties, typified by the Kennedy Family, assumed political control of the city by 1900. This control has been substantially maintained for more than a century, until the present day. The industrial base of the region, financed by Boston capital, reached its zenith around 1950. The city went into decline after the middle of the 20th century when thousands of textile mills and other factories were closed down as the United States began a long deindustrialization. By the early 21st century, the city's economy recovered, moving from an industrial base to one centered on education, medicine, and high technology, especially biotechnology startups. The many towns surrounding Boston became residential suburbs that now house the city's large population of white-collar workers.
      </p>
      </p>
    </div>
  );
};


export default History;