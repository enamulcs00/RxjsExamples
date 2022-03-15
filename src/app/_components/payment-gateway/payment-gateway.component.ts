import { CboService } from 'src/app/cbo.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {
  @ViewChild('payPalRef',{static:true})payPalRef:ElementRef
   options = {
    "key": "rzp_test_9MqHwCNInpvh85", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "Enamul Haque",
        "email": "enamulcs008@gmauk.com",
        "contact": "8946818146"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
  constructor(private service:CboService) { }
  handler:any = null;
  ngOnInit(): void {
    // this.loadStripe()
  }
openPaymentWindow(){
  var rzp1 = new this.service.nativeWindow.Razorpay(this.options);
    rzp1.open();
}



pay(amount: any) {

  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51KdeETSHa3Zgd1WEGSnGLsgbfMc7HPPj87Yl7ZrA1wBZqqnFPqOCGgss05DXSHM90IxA9W6W1Qm55SEtLdtkBiav00162fGmC7',
    locale: 'auto',
    token: function (token: any) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      console.log(token)
      alert('Token Created!!');
    }
  });

  handler.open({
    name: 'Demo Site',
    description: '2 widgets',
    amount: amount * 100
  });

}
render(){
  window['paypal'].Buttons({
    style:{
      layout:'horizontal',
      shape:'rect',
      color:'black',
      label:'paypal'
    },
    createOrder:(data,actions)=>{
     return actions.order.create({
purchase_units:[{
  amount:{
    value:'0.1',
    currency_code:'USD'
  }
}]
      })
    },
    onApprouve:(data,actions)=>{
      return actions.capture().then(res=>{
        alert("Transaction Successfull")
      })
    },
    onError:_err=>{
      alert('Transaction Failed')
    }

  }).render(this.payPalRef.nativeElement)
}
PayPal(){
  this.render()
}
}


