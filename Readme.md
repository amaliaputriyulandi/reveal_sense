# Penjelasan Aplikasi Reveal Sense

Aplikasi ini berjalan pada 2 sisi yaitu:

- Backend menggunakan framework Flask pada folder server
- Frontend pada folder client

Pada folder 'server' berisi mengenai model, dataset, train, fitur chatbot, API Chatbot, dan API CRD(Create, Read, Delete) Todo list.

Pada folder 'client' mengenai tampilan website yang telah terintegrasi dengan API yang telah dideploy sebelumnya menggunakan heroku.

Untuk melihat aplikasi kami yang telah di deploy pada server silahkan klik pada tautan ini https://reveal-sense.herokuapp.com/

# Untuk menjalankan pada sisi backend:

1. masuk pada folder server `cd server`
2. menjalankan perintah `virtualenv myenviro` untuk membuat virtual environment. Maka terlihat ada penambahan folder bernama `myenviro`
3. menjalankankan virtualenv `source myenviro/bin/activate`
4. Install package yang digunakan ada pada file requirements.txt atau dapat menjalankan perintah `pip install -r requirements.txt` jika menggunakan python3 jalankan `pip3 install -r requirements.txt`
5. kemudian jalankan server `python app.py` atau jika anda ingin mencoba fitur chatbot saja dapat menjalankan perintah `python chat.py`

# Untuk menjalankan pada sisi Frontend:

1. Masuk pada folder client `cd client`
2. Kemudian install package library yang digunakan dengan cara menjalankan perintah `npm install`. Maka terlihat ada penambahan folder bernama `node_modules`
3. Jalankan aplikasi dengan cara `npm run dev` atau `node app.js`

# RevelSense Team

- Amalia Putri Yulandi (Backend)
- Annisa (Editor)
- Mohammad Arif Muharam (Frontend)
- Nico Naufal Arifiyanto (CEO/Founder)
- Yusuf Refiansyah Arvinal Kinata (Penulis)
