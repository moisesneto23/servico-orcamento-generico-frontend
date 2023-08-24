<template>
    <div>
        <div>
    <input type="file" @change="AcionarImportacaoArquivo" accept=".xlsx, .csv" />
    <pre>{{ jsonData }}</pre>
  </div>
      <div>
        <table v-if="parsedData.length > 0" class="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Valor de Venda</th>
              <th>Valor de Compra</th>
              <th>Empresa ID</th>
              <th>Tipo de Unidade de Medida ID</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(produto, index) in obterTodos" :key="index">
              <td>{{ produto.Id }}</td>
              <td>{{ produto.Nome }}</td>
              <td>{{ produto.ValorVenda }}</td>
              <td>{{ produto.ValorCompra }}</td>
              <td>{{ produto.EmpresaId }}</td>
              <td>{{ produto.TipoUnidadeMedidaId }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import csvToJson from 'csvtojson';
  import ItemCsvImport from '@/Model/Itens/ItemCsvImport';
  import * as XLSX from 'xlsx';
  import fs from 'fs';

  @Component({
    components: {
    },
  })
  export default class ConversorCsvParaJson extends Vue {
    public get obterTodos(){
        return this.parsedData;
    }
    public parsedData: ItemCsvImport[] = [];
    public jsonData: string = '';

    public async AcionarImportacaoArquivo(event: Event): Promise<void> {
        
        const inputElement = event.target as HTMLInputElement;
        if (inputElement.files && inputElement.files.length > 0) {
        const file = inputElement.files[0];
        if (file) {
        const ext = file.name.split('.').pop()?.toLowerCase();

            if (ext === 'csv') {
            this.carregardadosCsv(file);
            } 
            else if (ext === 'xlsx') 
            {
                this.carregardadosXlsx(file);
          
            }     
        }
    }
}

private salvarArquivoJson(sheetData: any[]){
    const outputFilePath = 'caminho/para/saida.json';
                fs.writeFileSync(outputFilePath, JSON.stringify(sheetData, null, 2));
}

private carregardadosXlsx( arquivo: File){
    const reader = new FileReader();
    reader.onload = async (e: ProgressEvent<FileReader>) => {
        const data = new Uint8Array(e.target!.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName: string = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const sheetData: any[] = XLSX.utils.sheet_to_json(sheet);
        this.parsedData = sheetData;
        };
    reader.readAsArrayBuffer(arquivo);
}


private async carregardadosCsv(arquivo: File){
    const fileContent = await this.readFileContent(arquivo);
    this.parsedData = await csvToJson().fromString(fileContent);
}



   async handleFileChange(event: Event): Promise<void> {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files.length > 0) {
        const file = inputElement.files[0];
        if (file) {
          const fileContent = await this.readFileContent(file);
          const ext = file.name.split('.').pop()?.toLowerCase();
          if (ext === 'csv') {
            this.parsedData = await csvToJson().fromString(fileContent);
          } else if (ext === 'xlsx') {

          }
        }
      }
    }
  
    private async readFileContent(file: File): Promise<string> {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          resolve(event.target.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsBinaryString(file); 
      });
    }
  }
  </script>
  
  <style scoped>
  .product-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #080101;
  }
  
  .product-table th,
  .product-table td {
    padding: 8px;
    border: 1px solid #ccc;
  }
  </style>
  