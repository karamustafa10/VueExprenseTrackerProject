// CSS dosyasını içe aktar
import './assets/style.css';

// Vue uygulamasını oluşturmak için gerekli fonksiyonu içe aktar
import { createApp } from 'vue';

// Ana uygulama bileşenini içe aktar
import App from './App.vue';

// Toast bildirimleri için kullanılan kütüphaneyi içe aktar
import Toast from 'vue-toastification';

// Toast bildirimleri için gerekli stil dosyasını içe aktar
import 'vue-toastification/dist/index.css';

// Vue uygulamasını oluştur
const app = createApp(App);

// Toast bildirim kütüphanesini uygulamaya ekle
app.use(Toast);

// Uygulamayı belirtilen HTML öğesine monte et
app.mount('#app');
