import $ from 'jquery'

export class DoctorLookup {
  constructor(search){
    this.apiKey = process.env.exports.apiKey
    this.search = search
  }

  keywordDoctorSearch(doctorDisplay){
    let searchQuery = this.search
    console.log(searchQuery)
    let key = process.env.exports.apiKey
    let url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=' + searchQuery + '&location=or-portland&sort=best-match-desc&skip=0&limit=100&user_key=' + 
    console.log(url)
    $.ajax({
      url: (url),
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response){
        let doctorInfo = []
        for (let i = 0; i < 100; i++){
          doctorInfo.push(response.data[i])
        }
        console.log(doctorInfo)
        doctorDisplay(doctorInfo)
      },
      error: function(){
        window.location.replace('error.html')
      }
    })
  }

  nameDoctorSearch(doctorDisplay){
    let searchQuery = this.search
    console.log(searchQuery)
    let key = process.env.exports.apiKey
    let url = 'https://api.betterdoctor.com/2016-03-01/doctors?name=' + searchQuery + '&location=or-portland&sort=best-match-desc&skip=0&limit=100&user_key=' + key
    console.log(url)
    $.ajax({
      url: (url),
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response){
        let doctorInfo = []
        for (let i = 0; i < 100; i++){
          doctorInfo.push(response.data[i])
        }
        console.log(doctorInfo)
        doctorDisplay(doctorInfo)
      },
      error: function(){
        window.location.replace('error.html')
      }
    })
  }
}
