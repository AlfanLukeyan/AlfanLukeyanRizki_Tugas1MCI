# Tugas 1 Oprec MCI 2023: Database & SQL

## Soal-1

Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal!

### Penyelesaian

```SQL
SELECT nama, ukt FROM data_mahasiswa
ORDER BY ukt DESC
```

### Output
Berikut merupakan screenshot hasil query tersebut: </br>
![Output-1](/SQL/assets/1.png "Output Soal 1")

## Soal-2

Tampilkan semua daftar nama dan ukt berdasarkan nominal ukt yang paling mahal, jika ada ukt yang sama, urutkan berdasarkan nama mahasiswa secara alfabetikal.

### Penyelesaian

```SQL
SELECT nama, ukt FROM data_mahasiswa
ORDER BY ukt DESC, nama ASC;
```

### Output
Berikut merupakan screenshot hasil query tersebut: </br>
![Output-2](/SQL/assets/2.png "Output Soal 2")

Berikut merupkan grafik keseluruhan data. </br>
![2-Graph](/SQL/assets/2-graph.png "graph no 2")

## Soal-3

Hitunglah jumlah mahasiswa yang memiliki ipk >= 3.5 dan berada di semester 8

### Penyelesaian

```SQL
SELECT COUNT(nama) AS jumlah_mahasiswa FROM data_mahasiswa
WHERE ipk >= 3.5 AND semester = 8;
```

### Output
Berikut merupakan screenshot hasil query tersebut: </br>
![Output-3](/SQL/assets/3.png "Output Soal 3")

## Soal-4

Soal 4: Tampilkan nama, ukt, dan golongan. Jika ukt mahasiswa kurang dari sama dengan 1 juta, maka masuk golongan "A". Jika ukt mahasiswa diatas 1 juta sampai dengan 2 juta, maka masuk golongan "B" Jika ukt mahasiswa diatas 2 juta, maka masuk golongan "C".

### Penyelesaian

```SQL
SELECT nama, ukt,
    CASE
        WHEN ukt <= 1000000 THEN 'A'
        WHEN ukt > 1000000 AND ukt <= 2000000 THEN 'B'
        ELSE 'C'
    END AS golongan
FROM data_mahasiswa;
```

### Output
Berikut merupakan screenshot hasil query tersebut: </br>
![Output-4](/SQL/assets/4.png "Output Soal 4")

## Soal-5

Tampilkan daftar nama, semester dan ipk berdasarkan ipk tertinggi tiap semester. Diurutkan berdasarkan semesternya. Jika ada yang nilainya sama, maka diurutkan berdasarkan alfabet.

### Penyelesaian
- Pertama, membuat subquery untuk menghitung IPK tertinggi pada masing masing semester. Hasil subquery tersebut kemudian akan disimpan pada tabel yang baru.
```SQL
SELECT semester, MAX(ipk) as max_ipk
FROM table
GROUP BY semester
```
- Selanjutnya, subquery akan digabung dengan query utama dan melakukan `JOIN` untuk memfilter data berdasarkan semester dan nilai IPK tertinggi. Jika terdapat nilai yang sama maka akan di urutkan berdasarkan nama mahasiswa secara alfabetikal 

```SQL
SELECT t1.nama, t1.semester, t1.ipk
FROM data_mahasiswa t1
INNER JOIN (
    SELECT semester, MAX(ipk) as max_ipk
    FROM data_mahasiswa
    GROUP BY semester
) t2 ON t1.semester = t2.semester AND t1.ipk = t2.max_ipk
ORDER BY t1.semester, t1.nama;
```

### Output
Berikut merupakan screenshot hasil query tersebut: </br>
![Output-5](/SQL/assets/5.png "Output Soal 5")

## Author

Alfan Lukeyan Rizki - 5025211046

## Tools

- Visual Studio Code
- PostgreSQL pgAdmin 4