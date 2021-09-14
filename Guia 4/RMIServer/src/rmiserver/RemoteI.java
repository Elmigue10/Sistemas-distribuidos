package rmiserver;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface RemoteI extends Remote {

    public int add(int a, int b) throws RemoteException;
    public String saludar(String nombre) throws RemoteException;

}
