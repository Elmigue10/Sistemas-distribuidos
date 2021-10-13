<link rel="stylesheet" href="./recursos/style.css">
<body>

<div class="titulo">
    <h1>ALUMNOS</h1>
</div>

<div class="alumnos">
    <table>
        <thead>
            <tr>
                <th class="th-table">Id</th>
                <th class="th-table">Nombre</th>
                <th class="th-table">Edad</th>
            </tr>
        </thead>
        <tbody>
            
            <?php
                $j = 0;
                for($i = 0; $i < ($columnas); $i++){
                    $j++;
                    if($j == 4){
                        echo "<tr>";
                        $j=1;
                    }
                    echo "<td style = 'width:30px'; margin-right= 10px; >".$resultado['listarResult']['string'][$i]." </td> ";
                }
            ?>

        </tbody>
    </table>
</div>
</body>