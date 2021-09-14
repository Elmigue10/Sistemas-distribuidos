package rmiserver;

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class AdditionServer {

    public static void main (String [] argv){
        try{
            Registry registry = LocateRegistry.createRegistry(5000);
            Addition addition = new Addition();
            registry.rebind("rmi://localhost/ABC",addition);
            System.out.println("Additional server is ready");

        } catch (RemoteException e){
            System.out.println("Additional server failed: "+e);
        }
    }

}
