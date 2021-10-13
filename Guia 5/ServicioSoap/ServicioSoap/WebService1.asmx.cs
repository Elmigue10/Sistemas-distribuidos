using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using MySql.Data;
using MySql.Data.MySqlClient;

namespace ServicioSoap
{
    /// <summary>
    /// Descripción breve de WebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    // [System.Web.Script.Services.ScriptService]
    public class WebService1 : System.Web.Services.WebService
    {

        string ruta = "Server=localhost; database=colegio; password=; user=root;";

        [WebMethod]
        public string HelloWorld()
        {
            return "Hola a todos";
        }

        [WebMethod]
        public List<string> listar() {

            List<string> listarAlumno = new List<string>();
            MySqlConnection conexion = new MySqlConnection(ruta);
            conexion.Open();
            MySqlCommand command = conexion.CreateCommand();
            command.CommandText = ("select * from alumno");
            command.Connection = conexion;
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read()) {
                listarAlumno.Add(reader.GetString(0).ToString());
                listarAlumno.Add(reader.GetString(1).ToString());
                listarAlumno.Add(reader.GetString(2).ToString());
            }

            command.Connection.Close();

            return listarAlumno;
        }


        [WebMethod]
        public void guardar(int id, string nombre, int edad)
        {
            string sql = "Insert into alumno values("+id+","+"'"+nombre+"'"+","+edad+")";
            MySqlConnection conexion = new MySqlConnection(ruta);
            MySqlCommand command = new MySqlCommand(sql, conexion);
            MySqlDataReader reader;
            conexion.Open();
            reader = command.ExecuteReader();
            conexion.Close();

        }


        [WebMethod]
        public void eliminar(int id) {

            String sql = "delete from alumno where id ="+id;
            MySqlConnection conexion = new MySqlConnection(ruta);
            MySqlCommand command = new MySqlCommand(sql, conexion);
            MySqlDataReader reader;
            conexion.Open();
            reader = command.ExecuteReader();
            conexion.Close();

        }


        [WebMethod]
        public Alumno editar(int id, string nombre, int edad)
        {
            var sql = "update alumno set nombre ="+"'"+nombre+"'"+ ", edad ="+edad+" where id ="+id;
            MySqlConnection conexion = new MySqlConnection(ruta);
            MySqlCommand command = new MySqlCommand(sql, conexion);
            MySqlDataReader reader;
            conexion.Open();
            reader = command.ExecuteReader();
            conexion.Close();

            Alumno alumno = new Alumno();
            alumno.id = id;
            alumno.nombre = nombre;
            alumno.edad = edad;

            return alumno;
        }

    }
}
