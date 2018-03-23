import $ from 'jquery';

export class DoctorLookup {
  constructor(search){
    this.apiKey = process.env.exports.apiKey;
    this.search = "Back%20Injury";
  }

  betterDoctorSearch(doctorDisplay){
    let searchQuery = this.search;
    console.log(searchQuery);
    let key = process.env.exports.apiKey;
    let url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=back%20injury&location=or-portland&skip=0&limit=10&user_key=' + key;
    console.log(url);
    $.ajax({
      headers: (key),
      url: (url),
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response){
        let doctorInfo = [];
        for (let i = 0; i < 10; i++){
          doctorInfo.push(response.data[i])
        }
        console.log(doctorInfo);
        doctorDisplay(doctorInfo);
      },
      error: function(){

      }
    })


  }
}
