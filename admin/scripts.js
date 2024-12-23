function exportToPDF() {
    const { jsPDF } = window.jspdf;  // Menyusun jsPDF dari objek global window.jspdf
    const doc = new jsPDF();
  
    // Menambahkan judul pada halaman PDF
    doc.setFontSize(18);
    doc.text('Laporan', 14, 20);  // Menambahkan teks di posisi tertentu
  
    // Mengambil elemen tabel
    const table = document.querySelector('table');  // Mengambil tabel pertama di halaman
    const rows = Array.from(table.rows);  // Mengambil semua baris dalam tabel
  
    // Menyiapkan data untuk tabel di PDF
    const headers = [];
    const ths = rows[0].cells;  // Mengambil sel header
    for (let i = 0; i < ths.length; i++) {
      // Menambahkan header yang tidak termasuk kolom "Aksi"
      if (ths[i].innerText !== "Aksi") {
        headers.push(ths[i].innerText);
      }
    }
  
    // Menyiapkan body tabel, mengabaikan kolom terakhir (kolom "Aksi")
    const body = rows.slice(1).map(row => {
      const rowData = Array.from(row.cells).map(cell => cell.innerText);  // Mengambil semua sel dalam baris
      rowData.pop();  // Menghapus kolom terakhir (kolom "Aksi")
      return rowData;  // Mengembalikan data tanpa kolom "Aksi"
    });
  
    // Menggunakan jsPDF autoTable untuk menambahkan tabel ke PDF
    doc.autoTable({
      startY: 30,  // Memulai penempatan tabel pada posisi Y
      head: [headers],  // Menambahkan header
      body: body,  // Menambahkan data body tabel
      theme: 'striped',  // Menambahkan gaya striped pada tabel
    });
  
    // Menyimpan PDF dengan nama file 'laporan.pdf'
    doc.save('laporan.pdf');
  }
  