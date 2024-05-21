// // eslint-disable-next-line no-unused-vars
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import sweden from '../assets/sweden.jpg.webp';
// import norway1 from '../assets/norway1.jpg';
// import netherland from '../assets/netherlands.jpg';
// import losangeles1 from '../assets/losangeles1.jpg.webp';
// import losangeles2 from '../assets/losangeles2.png';
// import sf from '../assets/sf.jpg'

// const Accommodations = () => {
//     const accommodations = [
//         {
//             location: 'Brälanda, Sweden',
//             description: 'Uniquely designed organic nature house, off-grid',
//             price: 120,
//             img: sweden
//         },
//         {
//             location: 'Fjordane, Norway',
//             description: 'Breathtaking Mountain views in cozy Birdbox',
//             price: 300,
//             img: norway1
//         },
//         {
//             location: 'Friesland, Netherlands',
//             description: 'Luxury suite overlooking the Wadden Sea',
//             price: 200,
//             img: netherland
//         },
//         {
//             location: 'Los Angeles',
//             description: 'Luxurious mansion in Beverly hills',
//             price: 800,
//             img: losangeles1
//         },
//         {
//             location: 'Los Angeles',
//             description: 'Exquisite villa right next to Hollywood hills',
//             price: 550,
//             img: losangeles2
//         },
//         {
//             location: 'San Fransico',
//             description: 'Get an amazing view of the Sanfransico landscape',
//             price: 120,
//             img: sf
//         },

//     ];

//     return (
//         <div className="container mt-10">
//             <div className="row">
//                 {accommodations.map((accommodation, index) => (
//                     <div className="col-sm-4 mb-4" key={index}>
//                         <div className="card h-100 border-0 shadow">
//                             <img src={accommodation.img} className="card-img-top rounded-top" alt="Accommodation" />
//                                 <div className="card-body">
//                                     <h5 className="card-title mb-2">{accommodation.location}</h5>
//                                     <p className="card-text mb-3">{accommodation.description}</p>
//                                         <div className="d-flex justify-content-between align-items-center">
//                                             <p className="card-text price mb-0">${accommodation.price} / night</p>
//                                             <button className="btn btn-primary">Book Now</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//             );
//     };

// export default function IndexPage(){
//     return(
//     <div>
//         <Accommodations />
//     </div>
//     )
// }
