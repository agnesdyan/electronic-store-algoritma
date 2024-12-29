// Data Produk dengan gambar
const produk = [
    {"nama": "Samsung Galaxy Tab A9+", "harga": 3999000, "gambar": "https://tse3.mm.bing.net/th?id=OIP.W2cJhfGgd8UmqejyIVhN7wHaHa&pid=Api"},
    {"nama": "Samsung Galaxy Tab S9 FE WiFi", "harga": 5899000, "gambar": "https://tse1.mm.bing.net/th?id=OIP.vXzPIgLSd5jdHTURt2ay8AHaHa&pid=Api"},
    {"nama": "Samsung Galaxy Tab A9 WiFi", "harga": 1709100, "gambar": "https://tse3.mm.bing.net/th?id=OIP.W2cJhfGgd8UmqejyIVhN7wHaHa&pid=Api"},
    {"nama": "Samsung Galaxy Tab S9 FE+ WiFi", "harga": 7799000, "gambar": "https://tse4.mm.bing.net/th?id=OIP.uAJICHLp65XpXBuMx9mnWgHaHa&pid=Api"},
    {"nama": "Samsung Galaxy Tab S9 FE", "harga": 6849000, "gambar": "https://tse4.mm.bing.net/th?id=OIP.fFGlKADy60SXSt3RqRwkKAHaHa&pid=Api"},
    {"nama": "Samsung Galaxy Tab A9", "harga": 2150100, "gambar": "https://tse3.mm.bing.net/th?id=OIP.W2cJhfGgd8UmqejyIVhN7wHaHa&pid=Ap"},
    {"nama": "Samsung Galaxy S24", "harga": 8999999, "gambar": "https://tse1.mm.bing.net/th?id=OIP.N6lzS3OqDqnLA8fq9TX1QgHaEK&pid=Api"},
    {"nama": "Samsung Galaxy Z Flip5", "harga": 15000000, "gambar": "https://tse3.mm.bing.net/th?id=OIP.zSWi_6oQatqp7H4SUKKwcAAAAA&pid=Api"},
    {"nama": "Samsung Galaxy A14", "harga": 2250000, "gambar": "https://tse2.mm.bing.net/th?id=OIP.SyP2Kesd1y8XJrDxvo8oOAHaHa&pid=Api"},
    {"nama": "Samsung Galaxy Z Fold5", "harga": 25000000, "gambar": "https://tse4.mm.bing.net/th?id=OIP.J0Ldx8MKFWfajR-lygpOTwHaEJ&pid=Api"},
    {"nama": "Samsung Galaxy M34 5G", "harga": 4500000, "gambar": "https://tse1.mm.bing.net/th?id=OIP.FaOP-QsOSeWn35MVxlXoJAHaHa&pid=Api"},
    {"nama": "Sony PlayStation 5", "harga": 6899000, "gambar": "https://tse2.mm.bing.net/th?id=OIP.85148_Q0AssOMoMDuWNhPAHaFj&pid=Api"},
    {"nama": "Sony PlayStation 4 Pro", "harga": 2921000, "gambar": "https://tse1.mm.bing.net/th?id=OIP.Pjba5EpErt45l4RHRujBBgHaEK&pid=Api"},
    {"nama": "Sony PlayStation 4 Slim", "harga": 1621000, "gambar": "https://tse1.mm.bing.net/th?id=OIP.oAQOXw49K7RZ5iv9UmiRuAHaHa&pid=Api"},
    {"nama": "Sony PlayStation 3 Slim", "harga": 470000, "gambar": "https://tse4.mm.bing.net/th?id=OIP.7XiPAXAAmCxDIM25840qwQHaHW&pid=Api"},
    {"nama": "Sony PlayStation 2", "harga": 200000, "gambar": "https://tse1.mm.bing.net/th?id=OIP.N7yKBhRj4sQtzNKsuIJyjAHaFH&pid=Api"},
    {"nama": "Canon EOS M5", "harga": 6500000, "gambar": "https://p-id.ipricegroup.com/uploaded_0518f2b93a89219f35620f7b61bc3639.jpg"},
    {"nama": "Canon EOS 80D DSLR", "harga": 6500000, "gambar": "https://galaxycamera.id/media/catalog/product/cache/3639d1cded265a8bf3f51d2a4dcfb496/1/_/1_4.jpg"},
    {"nama": "Canon Powershoot SX540", "harga": 4559000, "gambar": "https://jakartacamera.com/wp-content/uploads/2019/08/Products92877-1000x1000-1394120758.jpg"},
    {"nama": "Google Pixel 9 Pro Fold", "harga": 28500000, "gambar": "https://tse4.mm.bing.net/th?id=OIP.fdGJ0e6moUPKMfrCQqX3lAHaEK&pid=Api"},
    {"nama": "Google Pixel 9 Pro XL", "harga": 23800000, "gambar": "https://tse2.mm.bing.net/th?id=OIP.KF3EIqtl48wr28l4DzPWpwHaEK&pid=Api"},
    {"nama": "Google Pixel 9 Pro", "harga": 19000000, "gambar": "https://tse4.mm.bing.net/th?id=OIP.l51-EP-KnixvoL-SB58VxwHaEK&pid=Api"},
    {"nama": "Google Pixel 9", "harga": 15800000, "gambar": "https://tse4.mm.bing.net/th?id=OIP.7j7UWotc78Oh4dn8OSjqtAHaFj&pid=Api"},
    {"nama": "Google Pixel 8a", "harga": 8000000, "gambar": "https://tse2.mm.bing.net/th?id=OIP.p-pnWetFE0u4toEHMnswwgHaFF&pid=Api"}
    {"nama": "Google Pixel 8a", "harga": 8000000, "gambar": "https://tse2.mm.bing.net/th?id=OIP.p-pnWetFE0u4toEHMnswwgHaFF&pid=Api"},
    {"nama": "iPhone 11", "harga": 6249000, "gambar": "https://tse4.mm.bing.net/th?id=OIP.4QvBM--yWL40l1T9ZA6KpgHaHq&pid=Api"},
    {"nama": "iPhone 12", "harga": 7499000, "gambar": "https://tse2.mm.bing.net/th?id=OIP.0H_GXDBmj8t95s1KzMU5GAHaL5&pid=Api"},
    {"nama": "iPhone 13", "harga": 8999000, "gambar": "https://tse1.mm.bing.net/th?id=OIP.UW5Dj1fI5GDiWQilfcWxzAHaE8&pid=Api"},
    {"nama": "iPhone 14", "harga": 12249000, "gambar": "https://tse3.mm.bing.net/th?id=OIP.pTMGD0hI-xUBuSVFyCq7nAHaFI&pid=Api"},
    {"nama": "iPhone 15", "harga": 12999000, "gambar": "https://tse3.mm.bing.net/th?id=OIP.zrIBWbtRRhVIFWjmefpLngHaEK&pid=Api"},
    {"nama": "iPhone 16", "harga": 16499000, "gambar": "https://tse2.mm.bing.net/th?id=OIP.y4O4WINSNwMKEsigA7BFSQHaEK&pid=Api"},
    {"nama": "Acer Swift Go AI SFG14", "harga": 13999000, "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/119/MTA-167868893/acer_acer_swift_go_14_ai_sfg14-73-5135_-nx-kv4sn-005--_core_ultra_5_125h-16gb_ddr5-512gb_ssd-14-_2-8k_ips-windows_11_home-ohs_2021-_pure_silver_full01_jxon46os.jpg"},
    {"nama": "Acer Aspire 5 A514", "harga": 9499000, "gambar": "https://api.mdp.co.id/upload/pictures/product/LP9715.jpg"},
    {"nama": "Acer Nitro 5 AN515", "harga": 11999000, "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/96/MTA-140411759/no-brand_no-brand_full01.jpg"},
    {"nama": "Asus Vivobook 14X OLED A1403", "harga": 12799000, "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//107/MTA-83745683/asus_asus-vivobook-14x-a1403za-oleds753-core-i7-12700h-16gb-512gb-ssd-blue_full01.jpg"},
    {"nama": "Asus TUF Gaming F15 FX506", "harga": 15499000, "gambar": "https://www.softcom.co.id/wp-content/uploads/2021/03/FA506QM-R736B6G-O-1.jpg"},
    {"nama": "Asus ZenBook 14 UX425EA", "harga": 13499000, "gambar": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//103/MTA-83746308/asus_asus-zenbook-ux425ea-bm551ts-intel-core-i5-1135g7-ram-8gb-ssd-512gb_full01.jpg"},
    {"nama": "Lenovo IdeaPad Slim 1 11IGL05", "harga": 3200000, "gambar": "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/28/ca36e82a-4e73-4a88-9ac1-ccc1aed9ea36.png"},
    {"nama": "Lenovo LOQ 15IAX9I", "harga": 11950000, "gambar": "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/13/86033dac-1040-4e81-80cf-619492cda505.jpg"},
    {"nama": "Lenovo ThinkBook 14 G2 ARE", "harga": 10500000, "gambar": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/8/23/242db61e-777b-4bc2-b5cc-3e817a4f6072.jpg"},
    {"nama": "HP Pavilion x360 14", "harga": 9999000, "gambar": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/7/17/1b01f4c4-9bf1-43a6-a95a-2b5a33852f8e.jpg"},
    {"nama": "HP Victus 16", "harga": 14999000, "gambar": "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/11/16/137a084a-8b6e-4f12-88d6-2ad584949fe3.jpg"},
    {"nama": "HP 15s eq2136AU", "harga": 6799000, "gambar": "https://assets.nikshanonline.com/wp-content/uploads/2024/02/HP-15s-AMD-Ryzen-3-5300U-15.6-inch39.6cm-FHD-Anti-Glare-Laptop-8GB-RAM512-GB-SSDAMD-Radeon-GraphicsWin-11-15s-eq2213AU-1.png"}
];


// Menampilkan Daftar Produk
function displayProducts(products) {
    const productList = document.getElementById('searchResults');
    productList.innerHTML = "";  // Clear previous results
    products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product-item');
        div.innerHTML = `
            <div class="info">
                <h3>${product.nama}</h3> <!-- Nama Produk -->
                <img src="${product.gambar}" alt="${product.nama}"> <!-- Gambar Produk -->
                <p><strong>Harga: </strong>Rp${product.harga.toLocaleString()}</p> <!-- Harga Produk -->
            </div>
        `;
        productList.appendChild(div);
    });
}


// Fungsi Binary Search
function binarySearch(data, target) {
    let low = 0;
    let high = data.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (data[mid].harga === target) {
            return mid;
        } else if (data[mid].harga < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

// Fungsi untuk mencari berdasarkan nama
function searchByName(data, target) {
    return data.filter(item => item.nama.toLowerCase().includes(target.toLowerCase()));
}

// Sorting Produk berdasarkan harga
function quickSort(data) {
    if (data.length <= 1) return data;
    const pivot = data[Math.floor(data.length / 2)];
    const left = data.filter(item => item.harga < pivot.harga);
    const middle = data.filter(item => item.harga === pivot.harga);
    const right = data.filter(item => item.harga > pivot.harga);
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Menangani Form Pencarian
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const searchOption = document.getElementById('searchOption').value;
    const searchInput = document.getElementById('searchInput').value;

    let results = [];

    if (searchOption === '1') {
        const targetHarga = parseInt(searchInput);
        const index = binarySearch(produk, targetHarga);
        if (index !== -1) {
            results.push(produk[index]);
        }
    } else if (searchOption === '2') {
        results = searchByName(produk, searchInput);
    }

    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = "<h3>Hasil Pencarian</h3>";
    if (results.length > 0) {
        displayProducts(results);
    } else {
        searchResults.innerHTML += "<p>Produk tidak ditemukan</p>";
    }
});

// Menampilkan produk awal
displayProducts(quickSort(produk));
