// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// Data Daerah
const daerahLabels1 = ['Bogor', 'Sukabumi', 'Cianjur', 'Bandung', 'Garut', 'Tasikmalaya', 'Ciamis', 'Kuningan', 'Cirebon', 'Majalengka', 'Sumedang', 'Indramayu', 'Subang', 'Purwakarta', 'Karawang', 'Bekasi', 'Bandung Barat', 'Pangandaran', 'Kota Bogor', 'Kota sukabumi', 'Kota Bandung', 'Kota Cirebon', 'Kota Bekasi', 'Kota Depok', 'Kota Cimahi', 'Kota Tasikmalaya', 'Kota Banjar'];

// BAR CHART - Jumlah Guru1
const barChartGuru1Options = {
  series: [{
    name: 'Jumlah Guru',
    data: [42151, 4199, 1841, 1657, 2717, 2588, 1533, 1006, 1139, 1376, 953, 989, 1184, 1352, 782, 1705, 3030, 1533, 282, 1297, 508, 3809, 769, 2712, 1493, 536, 963, 198],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 2,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartGuru1 = new ApexCharts(document.querySelector('#bar-chart-guru1'), barChartGuru1Options);
barChartGuru1.render();

// BAR CHART - Jumlah Siswa1
const barChartSiswa1Options = {
  series: [{
    name: 'Jumlah Siswa',
    data: [85595, 39358, 33562, 59814, 51478, 26684, 16840, 19757, 24795, 18596, 18021, 20576, 25683, 16761, 31297, 57604, 29561, 4740, 21070, 8243, 61786, 12589, 48032, 31317, 9797, 16052, 3319],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 2,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartSiswa1 = new ApexCharts(document.querySelector('#bar-chart-siswa1'), barChartSiswa1Options);
barChartSiswa1.render();

// BAR CHART - Jumlah Sekolah1
const barChartSekolah1Options = {
  series: [{
    name: 'Jumlah Sekolah',
    data: [192, 83, 95, 109, 127, 71, 31, 27, 49, 22, 29, 52, 49, 28, 49, 122, 60, 8, 54, 19, 139, 27, 109, 68, 16, 27, 5],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#246dec', '#cc3c43'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 2,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartSekolah1 = new ApexCharts(document.querySelector('#bar-chart-sekolah1'), barChartSekolah1Options);
barChartSekolah1.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Jumlah Siswa',
      data: [85595, 39358, 33562, 59814, 51478, 26684, 16840, 19757, 24795, 18596, 18021, 20576, 25683, 16761, 31297, 57604, 29561, 4740, 21070, 8243, 61786, 12589, 48032, 31317, 9797, 16052, 3319],
    },
    {
      name: 'Jumlah Sekolah',
        data: [192, 83, 95, 109, 127, 71, 31, 27, 49, 22, 29, 52, 49, 28, 49, 122, 60, 8, 54, 19, 139, 27, 109, 68, 16, 27, 5],
    },
    {
      name: 'Jumlah Guru',
      data: [42151, 4199, 1841, 1657, 2717, 2588, 1533, 1006, 1139, 1376, 953, 989, 1184, 1352, 782, 1705, 3030, 1533, 282, 1297, 508, 3809, 769, 2712, 1493, 536, 963, 198],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#f5b74f','#367952', '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Bogor', 'Sukabumi', 'Cianjur', 'Bandung', 'Garut', 'Tasikmalaya', 'Ciamis', 'Kuningan', 'Cirebon', 'Majalengka', 'Sumedang', 'Indramayu', 'Subang', 'Purwakarta', 'Karawang', 'Bekasi', 'Bandung Barat', 'Pangandaran', 'Kota Bogor', 'Kota sukabumi', 'Kota Bandung', 'Kota Cirebon', 'Kota Bekasi', 'Kota Depok', 'Kota Cimahi', 'Kota Tasikmalaya', 'Kota Banjar'],
  markers: {
    size: 2,
  },
  yaxis: [
    {
      title: {
        text: 'Jumlah Siswa',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Jumlah Guru',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

// Data Daerah
const daerahLabels = ['Bogor', 'Sukabumi', 'Cianjur', 'Bandung', 'Garut', 'Tasikmalaya', 'Ciamis', 'Kuningan', 'Cirebon', 'Majalengka', 'Sumedang', 'Indramayu', 'Subang', 'Purwakarta', 'Karawang', 'Bekasi', 'Bandung Barat', 'Pangandaran', 'Kota Bogor', 'Kota sukabumi', 'Kota Bandung', 'Kota Cirebon', 'Kota Bekasi', 'Kota Depok', 'Kota Cimahi', 'Kota Tasikmalaya', 'Kota Banjar'];

// PIE CHART - Jumlah Guru
const pieChartGuruOptions = {
  series: [42151, 4199, 1841, 1657, 2717, 2588, 1533, 1006, 1139, 1376, 953, 989, 1184, 1352, 782, 1705, 3030, 1533, 282, 1297, 508, 3809, 769, 2712, 1493, 536, 963, 198],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Guru'
  }
};

const pieChartGuru = new ApexCharts(
  document.querySelector('#pie-chart-guru'),
  pieChartGuruOptions
);
pieChartGuru.render();

// PIE CHART - Jumlah Siswa
const pieChartSiswaOptions = {
  series: [85595, 39358, 33562, 59814, 51478, 26684, 16840, 19757, 24795, 18596, 18021, 20576, 25683, 16761, 31297, 57604, 29561, 4740, 21070, 8243, 61786, 12589, 48032, 31317, 9797, 16052, 3319],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Siswa'
  }
};

const pieChartSiswa = new ApexCharts(
  document.querySelector('#pie-chart-Siswa'),
  pieChartSiswaOptions
);
pieChartSiswa.render();


// PIE CHART - Jumlah Sekolah
const pieChartSekolahOptions = {
  series: [192, 83, 95, 109, 127, 71, 31, 27, 49, 22, 29, 52, 49, 28, 49, 122, 60, 8, 54, 19, 139, 27, 109, 68, 16, 27, 5],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Sekolah'
  }
};

const pieChartSekolah = new ApexCharts(
  document.querySelector('#pie-chart-sekolah'),
  pieChartSekolahOptions
);
pieChartSekolah.render();