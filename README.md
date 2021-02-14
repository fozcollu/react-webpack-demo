Webpack - babel configurationu için webpack-demo reposunu inceleyebilirsiniz 
# https://github.com/fozcollu/webpack-demo

-----------------------------------------------------------------------------

# Webpack ile React projesi geliştirme

### React için babel preset'ini yükleyelim
$ npm install @babel/preset-react --save-dev

### react bileşenlerini yükleyelim
$ npm install react react-dom

## Dynamic import ile Code-splitting işlemini gerçekleştirme

Webpack ile code-splitting yaparak performans kazanabiliriz.
Kodun parçalara ayrılması sayesinde sadece istenen anda istenen kütüphanenin yüklenmesi gerçekleştirilebilir.
Böylece uygulamanın tarayıcıda yüklenmesi hızlı bir şekilde gerçekleşir ve performans artışı sağlanır. Code splitting tekniği 3 şekilde gerçekleştirilebilir:

## Code splitting 2 şekilde gerçekleşebilir
1. Birden fazla entry point tanımlanarak. (Webpack 4 ile depracted oldu. Artık splitChunks tercih ediliyor)
2. optimization.splitChunks metodu ile oluşan script'i kütüphane bazında ayrı ayrı dosyalara ayırarak.
3. Dynamic import yöntemi ile kod bazında ayırarak

Kütüphane kodlarını optimization.splitchunks özelliği ile ayrıştırabilirsiniz. (Moment tarzı kütüphanelerle, vendor kodun(sizin yazdığınız kodu chunklarla ayrı paketlemek.)
Şimdi bunun için webpack.config.js dosyasına gelelim ve aşağıdaki gibi optimization kısmını ekleyelim:
` optimization: {
        splitChunks: { chunks: "all" }
    }, `


Bir başka optimizasyon yöntemi olan Dynamic import'un 2 farklı kullanımı var. 1-) Modul bazlı 2-) Route bazlı
### Modul bazlı dynamic importa örnek olarak aşağıdaki kod verilebilir.
` const dateModule = () => import("./modules/dateModule");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    dateModule().then(({ getCurrentDate }) => {
        document.getElementById('dateContainer').innerHTML = getCurrentDate();
    });
});.format('MMMM Do YYYY, h:mm:ss a');
}`
