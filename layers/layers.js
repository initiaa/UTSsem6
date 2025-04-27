var wms_layers = [];


        var lyr_gmaps_0 = new ol.layer.Tile({
            'title': 'gmaps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_hasil67KM_1 = new ol.format.GeoJSON();
var features_hasil67KM_1 = format_hasil67KM_1.readFeatures(json_hasil67KM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hasil67KM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hasil67KM_1.addFeatures(features_hasil67KM_1);
var lyr_hasil67KM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hasil67KM_1, 
                style: style_hasil67KM_1,
                popuplayertitle: 'hasil67KM',
                interactive: true,
                title: '<img src="styles/legend/hasil67KM_1.png" /> hasil67KM'
            });
var format_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2 = new ol.format.GeoJSON();
var features_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2 = format_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2.readFeatures(json_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2.addFeatures(features_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2);
var lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2, 
                style: style_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2,
                popuplayertitle: 'BATAS KABUPATEN KOTA DESEMBER 2019 DUKCAPIL',
                interactive: true,
                title: '<img src="styles/legend/BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2.png" /> BATAS KABUPATEN KOTA DESEMBER 2019 DUKCAPIL'
            });
var format_HistoriesGempa_3 = new ol.format.GeoJSON();
var features_HistoriesGempa_3 = format_HistoriesGempa_3.readFeatures(json_HistoriesGempa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HistoriesGempa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HistoriesGempa_3.addFeatures(features_HistoriesGempa_3);
var lyr_HistoriesGempa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HistoriesGempa_3, 
                style: style_HistoriesGempa_3,
                popuplayertitle: 'Histories Gempa',
                interactive: true,
                title: '<img src="styles/legend/HistoriesGempa_3.png" /> Histories Gempa'
            });
var format_PATAHAN_4 = new ol.format.GeoJSON();
var features_PATAHAN_4 = format_PATAHAN_4.readFeatures(json_PATAHAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PATAHAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PATAHAN_4.addFeatures(features_PATAHAN_4);
var lyr_PATAHAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PATAHAN_4, 
                style: style_PATAHAN_4,
                popuplayertitle: 'PATAHAN',
                interactive: true,
                title: '<img src="styles/legend/PATAHAN_4.png" /> PATAHAN'
            });
var format_RUMAHSAKIT_5 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_5 = format_RUMAHSAKIT_5.readFeatures(json_RUMAHSAKIT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_5.addFeatures(features_RUMAHSAKIT_5);
var lyr_RUMAHSAKIT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_5, 
                style: style_RUMAHSAKIT_5,
                popuplayertitle: 'RUMAH SAKIT',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_5.png" /> RUMAH SAKIT'
            });
var format_GEMPA_6 = new ol.format.GeoJSON();
var features_GEMPA_6 = format_GEMPA_6.readFeatures(json_GEMPA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEMPA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEMPA_6.addFeatures(features_GEMPA_6);
var lyr_GEMPA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEMPA_6, 
                style: style_GEMPA_6,
                popuplayertitle: 'GEMPA',
                interactive: true,
                title: '<img src="styles/legend/GEMPA_6.png" /> GEMPA'
            });
var format_BANGUNAN_7 = new ol.format.GeoJSON();
var features_BANGUNAN_7 = format_BANGUNAN_7.readFeatures(json_BANGUNAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_7.addFeatures(features_BANGUNAN_7);
var lyr_BANGUNAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_7, 
                style: style_BANGUNAN_7,
                popuplayertitle: 'BANGUNAN',
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_7.png" /> BANGUNAN'
            });
var format_geo_8 = new ol.format.GeoJSON();
var features_geo_8 = format_geo_8.readFeatures(json_geo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geo_8.addFeatures(features_geo_8);
var lyr_geo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geo_8, 
                style: style_geo_8,
                popuplayertitle: 'geo',
                interactive: true,
                title: '<img src="styles/legend/geo_8.png" /> geo'
            });
var format_TEMPATIBADAH_9 = new ol.format.GeoJSON();
var features_TEMPATIBADAH_9 = format_TEMPATIBADAH_9.readFeatures(json_TEMPATIBADAH_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEMPATIBADAH_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMPATIBADAH_9.addFeatures(features_TEMPATIBADAH_9);
var lyr_TEMPATIBADAH_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEMPATIBADAH_9, 
                style: style_TEMPATIBADAH_9,
                popuplayertitle: 'TEMPAT IBADAH',
                interactive: true,
                title: '<img src="styles/legend/TEMPATIBADAH_9.png" /> TEMPAT IBADAH'
            });
var format_SEKOLAHTK_10 = new ol.format.GeoJSON();
var features_SEKOLAHTK_10 = format_SEKOLAHTK_10.readFeatures(json_SEKOLAHTK_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEKOLAHTK_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEKOLAHTK_10.addFeatures(features_SEKOLAHTK_10);
var lyr_SEKOLAHTK_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEKOLAHTK_10, 
                style: style_SEKOLAHTK_10,
                popuplayertitle: 'SEKOLAH TK',
                interactive: true,
                title: '<img src="styles/legend/SEKOLAHTK_10.png" /> SEKOLAH TK'
            });
var format_SEKOLAHSMP_11 = new ol.format.GeoJSON();
var features_SEKOLAHSMP_11 = format_SEKOLAHSMP_11.readFeatures(json_SEKOLAHSMP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEKOLAHSMP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEKOLAHSMP_11.addFeatures(features_SEKOLAHSMP_11);
var lyr_SEKOLAHSMP_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEKOLAHSMP_11, 
                style: style_SEKOLAHSMP_11,
                popuplayertitle: 'SEKOLAH SMP',
                interactive: true,
                title: '<img src="styles/legend/SEKOLAHSMP_11.png" /> SEKOLAH SMP'
            });
var format_SEKOLAHSMA_12 = new ol.format.GeoJSON();
var features_SEKOLAHSMA_12 = format_SEKOLAHSMA_12.readFeatures(json_SEKOLAHSMA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEKOLAHSMA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEKOLAHSMA_12.addFeatures(features_SEKOLAHSMA_12);
var lyr_SEKOLAHSMA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEKOLAHSMA_12, 
                style: style_SEKOLAHSMA_12,
                popuplayertitle: 'SEKOLAH SMA',
                interactive: true,
                title: '<img src="styles/legend/SEKOLAHSMA_12.png" /> SEKOLAH SMA'
            });
var format_SEKOLAHSD_13 = new ol.format.GeoJSON();
var features_SEKOLAHSD_13 = format_SEKOLAHSD_13.readFeatures(json_SEKOLAHSD_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEKOLAHSD_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEKOLAHSD_13.addFeatures(features_SEKOLAHSD_13);
var lyr_SEKOLAHSD_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEKOLAHSD_13, 
                style: style_SEKOLAHSD_13,
                popuplayertitle: 'SEKOLAH SD',
                interactive: true,
                title: '<img src="styles/legend/SEKOLAHSD_13.png" /> SEKOLAH SD'
            });
var format_SPBU_14 = new ol.format.GeoJSON();
var features_SPBU_14 = format_SPBU_14.readFeatures(json_SPBU_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_14.addFeatures(features_SPBU_14);
var lyr_SPBU_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPBU_14, 
                style: style_SPBU_14,
                popuplayertitle: 'SPBU',
                interactive: true,
                title: '<img src="styles/legend/SPBU_14.png" /> SPBU'
            });
var format_PELABUHAN_15 = new ol.format.GeoJSON();
var features_PELABUHAN_15 = format_PELABUHAN_15.readFeatures(json_PELABUHAN_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PELABUHAN_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PELABUHAN_15.addFeatures(features_PELABUHAN_15);
var lyr_PELABUHAN_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PELABUHAN_15, 
                style: style_PELABUHAN_15,
                popuplayertitle: 'PELABUHAN',
                interactive: true,
                title: '<img src="styles/legend/PELABUHAN_15.png" /> PELABUHAN'
            });

lyr_gmaps_0.setVisible(true);lyr_hasil67KM_1.setVisible(true);lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2.setVisible(true);lyr_HistoriesGempa_3.setVisible(true);lyr_PATAHAN_4.setVisible(true);lyr_RUMAHSAKIT_5.setVisible(true);lyr_GEMPA_6.setVisible(true);lyr_BANGUNAN_7.setVisible(true);lyr_geo_8.setVisible(true);lyr_TEMPATIBADAH_9.setVisible(true);lyr_SEKOLAHTK_10.setVisible(true);lyr_SEKOLAHSMP_11.setVisible(true);lyr_SEKOLAHSMA_12.setVisible(true);lyr_SEKOLAHSD_13.setVisible(true);lyr_SPBU_14.setVisible(true);lyr_PELABUHAN_15.setVisible(true);
var layersList = [lyr_gmaps_0,lyr_hasil67KM_1,lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2,lyr_HistoriesGempa_3,lyr_PATAHAN_4,lyr_RUMAHSAKIT_5,lyr_GEMPA_6,lyr_BANGUNAN_7,lyr_geo_8,lyr_TEMPATIBADAH_9,lyr_SEKOLAHTK_10,lyr_SEKOLAHSMP_11,lyr_SEKOLAHSMA_12,lyr_SEKOLAHSD_13,lyr_SPBU_14,lyr_PELABUHAN_15];
lyr_hasil67KM_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'no': 'no', 'hari': 'hari', 'bulan': 'bulan', 'tahun': 'tahun', 'date': 'date', 'time__wib_': 'time__wib_', 'y': 'y', 'x': 'x', 'depth_km': 'depth_km', 'mag': 'mag', 'unit_m': 'unit_m', 'region': 'region', 'dirasakan': 'dirasakan', 'kelas_m': 'kelas_m', });
lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', });
lyr_HistoriesGempa_3.set('fieldAliases', {'Tanggal': 'Tanggal', 'Magnitudo': 'Magnitudo', 'Latitude (�)': 'Latitude (�)', 'Longitude (�)': 'Longitude (�)', 'Kedalaman (km)': 'Kedalaman (km)', 'Lokasi': 'Lokasi', 'Sumber': 'Sumber', });
lyr_PATAHAN_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'GM_LAYER': 'GM_LAYER', 'GM_TYPE': 'GM_TYPE', 'LAYER': 'LAYER', 'Id': 'Id', 'LCLASSSTR': 'LCLASSSTR', 'Type': 'Type', 'Mmax_d': 'Mmax_d', 'Sliprate_1': 'Sliprate_1', 'Fault_Name': 'Fault_Name', 'Segment_Na': 'Segment_Na', 'LENGHT': 'LENGHT', 'Name': 'Name', 'Segment': 'Segment', 'Fault': 'Fault', 'LENGTH_KM': 'LENGTH_KM', 'CLASSSTR': 'CLASSSTR', 'Seg_Name': 'Seg_Name', 'lenght_km_': 'lenght_km_', 'lenght_km': 'lenght_km', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID_4': 'OBJECTID_4', 'GM_LAYER_1': 'GM_LAYER_1', 'GM_TYPE_1': 'GM_TYPE_1', 'LCLASSSTR_': 'LCLASSSTR_', 'Fault_Na_1': 'Fault_Na_1', 'Segment__1': 'Segment__1', 'Shape_Leng': 'Shape_Leng', 'name_group': 'name_group', 'Shape_Le_1': 'Shape_Le_1', });
lyr_RUMAHSAKIT_5.set('fieldAliases', {'Nomor': 'Nomor', 'Nama Lokasi': 'Nama Lokasi', 'Alamat': 'Alamat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_GEMPA_6.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'no': 'no', 'hari': 'hari', 'bulan': 'bulan', 'tahun': 'tahun', 'date': 'date', 'time__wib_': 'time__wib_', 'y': 'y', 'x': 'x', 'depth_km': 'depth_km', 'mag': 'mag', 'unit_m': 'unit_m', 'region': 'region', 'dirasakan': 'dirasakan', 'kelas_m': 'kelas_m', });
lyr_BANGUNAN_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', });
lyr_geo_8.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'no': 'no', 'hari': 'hari', 'bulan': 'bulan', 'tahun': 'tahun', 'date': 'date', 'time__wib_': 'time__wib_', 'y': 'y', 'x': 'x', 'depth_km': 'depth_km', 'mag': 'mag', 'unit_m': 'unit_m', 'region': 'region', 'dirasakan': 'dirasakan', 'kelas_m': 'kelas_m', });
lyr_TEMPATIBADAH_9.set('fieldAliases', {'Nomor': 'Nomor', 'Nama Tempat Ibadah': 'Nama Tempat Ibadah', 'Alamat': 'Alamat', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_SEKOLAHTK_10.set('fieldAliases', {'Nomor': 'Nomor', 'Nama TK': 'Nama TK', 'Alamat': 'Alamat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SEKOLAHSMP_11.set('fieldAliases', {'Nomor': 'Nomor', 'Nama Sekolah': 'Nama Sekolah', 'Alamat': 'Alamat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SEKOLAHSMA_12.set('fieldAliases', {'No': 'No', 'Nama Sekolah': 'Nama Sekolah', 'Alamat': 'Alamat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SEKOLAHSD_13.set('fieldAliases', {'nomor': 'nomor', 'nama_sd': 'nama_sd', 'alamat': 'alamat', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_SPBU_14.set('fieldAliases', {'Nomor': 'Nomor', 'Nama SPBU': 'Nama SPBU', 'Alamat': 'Alamat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_PELABUHAN_15.set('fieldAliases', {'Nomor': 'Nomor', 'Nama Lokasi': 'Nama Lokasi', 'Alamat': 'Alamat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_hasil67KM_1.set('fieldImages', {'ogc_fid': '', 'no': '', 'hari': '', 'bulan': '', 'tahun': '', 'date': '', 'time__wib_': '', 'y': '', 'x': '', 'depth_km': '', 'mag': '', 'unit_m': '', 'region': '', 'dirasakan': '', 'kelas_m': '', });
lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2.set('fieldImages', {'KAB_KOTA': 'TextEdit', });
lyr_HistoriesGempa_3.set('fieldImages', {'Tanggal': 'TextEdit', 'Magnitudo': 'TextEdit', 'Latitude (�)': 'TextEdit', 'Longitude (�)': 'TextEdit', 'Kedalaman (km)': 'Range', 'Lokasi': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_PATAHAN_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'GM_LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'LAYER': 'TextEdit', 'Id': 'TextEdit', 'LCLASSSTR': 'TextEdit', 'Type': 'TextEdit', 'Mmax_d': 'TextEdit', 'Sliprate_1': 'TextEdit', 'Fault_Name': 'TextEdit', 'Segment_Na': 'TextEdit', 'LENGHT': 'TextEdit', 'Name': 'TextEdit', 'Segment': 'TextEdit', 'Fault': 'TextEdit', 'LENGTH_KM': 'TextEdit', 'CLASSSTR': 'TextEdit', 'Seg_Name': 'TextEdit', 'lenght_km_': 'TextEdit', 'lenght_km': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID_4': 'TextEdit', 'GM_LAYER_1': 'TextEdit', 'GM_TYPE_1': 'TextEdit', 'LCLASSSTR_': 'TextEdit', 'Fault_Na_1': 'TextEdit', 'Segment__1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'name_group': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_RUMAHSAKIT_5.set('fieldImages', {'Nomor': 'Range', 'Nama Lokasi': 'TextEdit', 'Alamat': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_GEMPA_6.set('fieldImages', {'ogc_fid': 'Range', 'no': 'TextEdit', 'hari': 'TextEdit', 'bulan': 'TextEdit', 'tahun': 'TextEdit', 'date': 'DateTime', 'time__wib_': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'depth_km': 'TextEdit', 'mag': 'TextEdit', 'unit_m': 'TextEdit', 'region': 'TextEdit', 'dirasakan': 'TextEdit', 'kelas_m': 'TextEdit', });
lyr_BANGUNAN_7.set('fieldImages', {'NAMOBJ': '', 'REMARK': '', 'LCODE': '', });
lyr_geo_8.set('fieldImages', {'ogc_fid': '', 'no': '', 'hari': '', 'bulan': '', 'tahun': '', 'date': '', 'time__wib_': '', 'y': '', 'x': '', 'depth_km': '', 'mag': '', 'unit_m': '', 'region': '', 'dirasakan': '', 'kelas_m': '', });
lyr_TEMPATIBADAH_9.set('fieldImages', {'Nomor': 'Range', 'Nama Tempat Ibadah': 'TextEdit', 'Alamat': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_SEKOLAHTK_10.set('fieldImages', {'Nomor': 'Range', 'Nama TK': 'TextEdit', 'Alamat': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SEKOLAHSMP_11.set('fieldImages', {'Nomor': 'Range', 'Nama Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SEKOLAHSMA_12.set('fieldImages', {'No': 'Range', 'Nama Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SEKOLAHSD_13.set('fieldImages', {'nomor': 'Range', 'nama_sd': 'TextEdit', 'alamat': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_SPBU_14.set('fieldImages', {'Nomor': 'Range', 'Nama SPBU': 'TextEdit', 'Alamat': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_PELABUHAN_15.set('fieldImages', {'Nomor': 'Range', 'Nama Lokasi': 'TextEdit', 'Alamat': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_hasil67KM_1.set('fieldLabels', {'ogc_fid': 'no label', 'no': 'no label', 'hari': 'no label', 'bulan': 'no label', 'tahun': 'no label', 'date': 'no label', 'time__wib_': 'no label', 'y': 'no label', 'x': 'no label', 'depth_km': 'no label', 'mag': 'no label', 'unit_m': 'no label', 'region': 'no label', 'dirasakan': 'no label', 'kelas_m': 'no label', });
lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2.set('fieldLabels', {'KAB_KOTA': 'no label', });
lyr_HistoriesGempa_3.set('fieldLabels', {'Tanggal': 'no label', 'Magnitudo': 'no label', 'Latitude (�)': 'no label', 'Longitude (�)': 'no label', 'Kedalaman (km)': 'no label', 'Lokasi': 'no label', 'Sumber': 'no label', });
lyr_PATAHAN_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'GM_LAYER': 'no label', 'GM_TYPE': 'no label', 'LAYER': 'no label', 'Id': 'no label', 'LCLASSSTR': 'no label', 'Type': 'no label', 'Mmax_d': 'no label', 'Sliprate_1': 'no label', 'Fault_Name': 'no label', 'Segment_Na': 'no label', 'LENGHT': 'no label', 'Name': 'no label', 'Segment': 'no label', 'Fault': 'no label', 'LENGTH_KM': 'no label', 'CLASSSTR': 'no label', 'Seg_Name': 'no label', 'lenght_km_': 'no label', 'lenght_km': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID_4': 'no label', 'GM_LAYER_1': 'no label', 'GM_TYPE_1': 'no label', 'LCLASSSTR_': 'no label', 'Fault_Na_1': 'no label', 'Segment__1': 'no label', 'Shape_Leng': 'no label', 'name_group': 'no label', 'Shape_Le_1': 'no label', });
lyr_RUMAHSAKIT_5.set('fieldLabels', {'Nomor': 'no label', 'Nama Lokasi': 'no label', 'Alamat': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_GEMPA_6.set('fieldLabels', {'ogc_fid': 'no label', 'no': 'no label', 'hari': 'no label', 'bulan': 'no label', 'tahun': 'no label', 'date': 'no label', 'time__wib_': 'no label', 'y': 'no label', 'x': 'no label', 'depth_km': 'no label', 'mag': 'no label', 'unit_m': 'no label', 'region': 'no label', 'dirasakan': 'no label', 'kelas_m': 'no label', });
lyr_BANGUNAN_7.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', });
lyr_geo_8.set('fieldLabels', {'ogc_fid': 'no label', 'no': 'no label', 'hari': 'no label', 'bulan': 'no label', 'tahun': 'no label', 'date': 'no label', 'time__wib_': 'no label', 'y': 'no label', 'x': 'no label', 'depth_km': 'no label', 'mag': 'no label', 'unit_m': 'no label', 'region': 'no label', 'dirasakan': 'no label', 'kelas_m': 'no label', });
lyr_TEMPATIBADAH_9.set('fieldLabels', {'Nomor': 'no label', 'Nama Tempat Ibadah': 'no label', 'Alamat': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_SEKOLAHTK_10.set('fieldLabels', {'Nomor': 'no label', 'Nama TK': 'no label', 'Alamat': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_SEKOLAHSMP_11.set('fieldLabels', {'Nomor': 'no label', 'Nama Sekolah': 'no label', 'Alamat': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_SEKOLAHSMA_12.set('fieldLabels', {'No': 'no label', 'Nama Sekolah': 'no label', 'Alamat': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_SEKOLAHSD_13.set('fieldLabels', {'nomor': 'no label', 'nama_sd': 'no label', 'alamat': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_SPBU_14.set('fieldLabels', {'Nomor': 'no label', 'Nama SPBU': 'no label', 'Alamat': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_PELABUHAN_15.set('fieldLabels', {'Nomor': 'no label', 'Nama Lokasi': 'no label', 'Alamat': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_PELABUHAN_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});