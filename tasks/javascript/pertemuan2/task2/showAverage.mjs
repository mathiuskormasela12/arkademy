function showAverage(mtk, bahasaIndonesia, bahasaInggris, ipa) {
  if(!mtk || !bahasaInggris || !bahasaIndonesia || !ipa) {
    console.log('Nilai wajib di isi');
  } else {
    const average = Math.floor((mtk + bahasaInggris + bahasaIndonesia + ipa) / 4);
    
    if(average >= 90 && average <= 100) {
      console.log('Rata-rata = ', average);
      console.log('Grade = A');
    } else if(average >= 80 && average <= 89) {
      console.log('Rata-rata = ', average);
      console.log('Grade = B');
    } else if(average >= 70 && average <= 79) {
      console.log('Rata-rata = ', average);
      console.log('Grade = C');
    } else if(average >= 60 && average <= 69) {
      console.log('Rata-rata = ', average);
      console.log('Grade = D');
    } else if(average === 0 && average <= 59) {
      console.log('Rata-rata = ', average);
      console.log('Grade = E');
    } else {
      console.log('Nilai tidak dikenali');
    }
  }
}

export default showAverage;