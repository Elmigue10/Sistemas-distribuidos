package rmiserver;

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class RemoteServer {

    public static void main (String [] argv){
        try{
            Registry registry = LocateRegistry.createRegistry(5000);
            RemoteImpl remote = new RemoteImpl();
            registry.rebind("rmi://localhost/ABC",remote);
            System.out.println("Server is ready");
        } catch (RemoteException e){
            System.out.println("Server failed: "+e);
        }
    }

}
