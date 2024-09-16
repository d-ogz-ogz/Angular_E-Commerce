//import { FormControl } from "@angular/forms";

//export class DataFormControl extends FormControl {
//  override setValue(value: string | null, options: any) {

//    //super=yukarı doğru çağırma işlemi,bu sayede form güncellenir
//    //emitModelToViewChange=girilen değeri set eder,bunun için true değeri verilmeli.
//    //{ ...options, emitModelToViewChange: true }); = optionsların hepsi aynen geri gönderilecek,biri hariç. emitModelToViewChange o da virgülden sonra verilir
//    if (!value) {
//      super.setValue("", { ...options, emitModelToViewChange: true });
//      return;  //value olarak birşey gelmiyorsa,boş string olarak kaydeder.

//    }
//    if (value?.match(/[^0-9|\/]/gi)) {
//      super.setValue(this.value, { ...options, emitModelToViewChange: true });
//      return; //sadeec sayı ve slash girilmesi için,bu formatta değer girilmezse şimdiye kadar olan değeri döndür
//    }
//    if (value.length === 2 && this.value.length === 3) {
//      super.setValue(value, { ...options, emitModelToViewChange: true });
//      return; //this.value =şimdiye kadar olan değer,value=inputtan o an girilen değer.
//    }


//    if (value.length === 2 && this.value.length === 3) {
//      super.setValue(value, { ...options, emitModelToViewChange: true });
//      return; //slash koyulduğunda value'yi set eder,yani back tarafa slash düşmez.
//    }
//    if (value.length === 2) {
//      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
//      return; //2 haneden sonra otomatik slash koyar.
//    }
//    if (value.length > 5) {
//      super.setValue("", { ...options, emitModelToViewChange: true });
//    } //girilen karakter 5 ten büyükse,olan değeri döndür. yani fazlasına izin vermez.

//    super.setValue(value, { ...options, emitModelToViewChange: true });
//  }


//}
