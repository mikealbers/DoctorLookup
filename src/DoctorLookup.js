import $ from 'jquery';

export class DoctorLookup {
  constructor(){
    this.apiKey = exports.apiKey;
  }

  doctorSearch(){
    let searchQuery = this.search;
    const url = ("https://api.betterdoctor.com/2016-03-01/doctors?query=" + this.search + "&location=or-portland&skip=0&limit=10&user_key=" + this.apiKey)
    $.ajax({
      url: (url),
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response){

      },
      error: function(){

      }
    })


  }
}
