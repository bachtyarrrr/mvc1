$(function() {

    $('.tombolMhsTambah').on('click', function() {
        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');
        $('#nama').val('');
        $('#nrp').val('');
        $('#email').val('');
        $('#jurusan').val('');
        $('#id').val('');
    });


    $('.tampilMhsUbah').on('click', function() {

        $('#formModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action', 'http://localhost/php-mvc-main/public/mahasiswa/ubah');

        const id = $(this).data('id');

        $.ajax({
            url: 'http://localhost/php-mvc-main/public/mahasiswa/getubah',
            data: {
                id: id
            },
            method: 'post',
            dataType: 'json',
            success: function(data) {
                $('#nama').val(data.nama);
                $('#nrp').val(data.nrp);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });

    });

    $('.tombolMatkulTambah').on('click', function() {
        $('#formModalLabel').html('Tambah Data Mata Kuliah');
        $('.modal-footer button[type=submit]').html('Tambah Data');
        $('#nama').val('');
        $('#dosen').val('');
        $('#id').val('');
    });

    $('.tampilMatkulUbah').on('click', function() {

        $('#formModalLabel').html('Ubah Data Mata Kuliah');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action', 'http://localhost/php-mvc-main/public/matkul/ubah');

        const id = $(this).data('id');
        $.ajax({
            url: 'http://localhost/php-mvc-main/public/matkul/getubah',
            data: {
                id: id
            },
            method: 'post',
            dataType: 'json',
            success: function(data) {
                $('#nama').val(data.nama);
                $('#dosen').val(data.dosen);
                $('#id').val(data.id);
            }
        });

    });

});