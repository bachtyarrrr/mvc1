<div class="container mt-5">

    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"><?= $data['matkul']['nama']; ?></h5><br>
            <p class="card-text">Dosen : <b><?= $data['matkul']['dosen']; ?></b></p>
            <a href="<?= BASEURL; ?>/matkul" class="card-link">Kembali</a>
        </div>
    </div>

</div>