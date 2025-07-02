class Length {
      constructor(ft,inch){
            this.ft=ft;
            this.inch=inch
      }
      isValidObject(lengthObj){
            return lengthObj.ft>=0 && lengthObj.inch>=0
      }
      addLength(lengthObj){
     
            if(!this.isValidObject(this)||this.isValidObject(lengthObj))
            {
                  return [0,0];
            }
            let totalInch=this.inch+lengthObj.inch;
            let carryFt= Math.floor(totalInch / 12);
            let remainingInch = totalInch % 12;

            let totalFt = this.ft + lengthObj.ft + carryFt;

            return [totalFt,remainingInch]
      }
}


module.exports = Length;