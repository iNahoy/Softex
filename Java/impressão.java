public class impressão {
	public void imprimir(String tipoImpressao) {
		if (tipoImpressao.equals("CSV")) {
			System.out.println("Imprimir CSV");
		} else if (tipoImpressao.equals("PDF")) {
			System.out.println("Imprimir PDF");
		} else if (tipoImpressao.equals("DOCX")){
            System.out.println("Imprimir DOCX");
        }
	}
}