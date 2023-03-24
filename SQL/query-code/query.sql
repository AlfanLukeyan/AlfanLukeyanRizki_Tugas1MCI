-- Soal 1: Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal! --
SELECT nama, ukt FROM data_mahasiswa
ORDER BY ukt DESC

-- Soal 2: Tampilkan semua daftar nama dan ukt berdasarkan nominal ukt yang paling mahal, 
-- jika ada ukt yang sama, urutkan berdasarkan nama mahasiswa secara alfabetikal.
SELECT nama, ukt
FROM data_mahasiswa
ORDER BY ukt DESC, nama ASC;

-- Soal 3: Hitunglah jumlah mahasiswa yang memiliki ipk >= 3.5 dan berada di semester 8
SELECT COUNT(nama) AS jumlah_mahasiswa FROM data_mahasiswa
WHERE ipk >= 3.5 AND semester = 8;

-- Soal 4: Tampilkan nama, ukt, dan golongan. Jika ukt mahasiswa kurang dari sama dengan 1 juta, maka masuk golongan "A". 
-- Jika ukt mahasiswa diatas 1 juta sampai dengan 2 juta, maka masuk golongan "B" Jika ukt mahasiswa diatas 2 juta, maka masuk golongan "C".
SELECT nama, ukt,
    CASE
        WHEN ukt <= 1000000 THEN 'A'
        WHEN ukt > 1000000 AND ukt <= 2000000 THEN 'B'
        ELSE 'C'
    END AS golongan
FROM data_mahasiswa;

-- Soal 5: Tampilkan daftar nama, semester dan ipk berdasarkan ipk tertinggi tiap semester. Diurutkan berdasarkan semesternya.
-- Jika ada yang nilainya sama, maka diurutkan berdasarkan alfabet.
SELECT t1.nama, t1.semester, t1.ipk
FROM data_mahasiswa t1
INNER JOIN (
    SELECT semester, MAX(ipk) as max_ipk
    FROM data_mahasiswa
    GROUP BY semester
) t2 ON t1.semester = t2.semester AND t1.ipk = t2.max_ipk
ORDER BY t1.semester, t1.nama;