import AppLayout from "./components/layout/AppLayout";
import { CryptoContextProvider } from "./contex/crypto-contex";

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}
