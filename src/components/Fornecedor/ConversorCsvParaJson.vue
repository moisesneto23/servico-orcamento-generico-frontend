<template>
    <div>
        <div>
    <input type="file" @change="AcionarImportacaoArquivo" accept=".xlsx, .csv, .xml, .json" />
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
          } else if (ext === 'xlsx') {
            this.carregardadosXlsx(file);
          } else if (ext === 'xml') {
            this.carregardadosXml(file);
          } else if (ext === 'json') {
            this.carregardadosJson(file);
          }
        }
    }
}

private carregardadosXlsx(arquivo: File) {
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


private carregardadosXml(arquivo: File) {
  const reader = new FileReader();
  reader.onload = async (e: ProgressEvent<FileReader>) => {
    const xmlContent = e.target!.result as string;

    // Parse do XML para um objeto DOM
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');

    // Ler elementos do XML
    const rows = xmlDoc.getElementsByTagName('row');
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const id = parseInt(this.getTextContent(row, 'Id'));
      const nome = this.getTextContent(row, 'Nome');
      const valorVenda = this.getTextContent(row, 'ValorVenda');
      const valorCompra = this.getTextContent(row, 'ValorCompra');
      const empresaId = this.getTextContent(row, 'EmpresaId');
      const tipoUnidadeMedidaId = this.getTextContent(row, 'TipoUnidadeMedidaId');
      const nomeUnidadeMedida = this.getTextContent(row, 'NomeUnidadeMedida');

      this.parsedData.push({
        Id: id,
        Nome: nome,
        ValorVenda: parseFloat(valorVenda),
        ValorCompra: parseFloat(valorCompra),
        EmpresaId: parseInt(empresaId),
        TipoUnidadeMedidaId: parseInt(tipoUnidadeMedidaId),
        NomeUnidadeMedida: nomeUnidadeMedida
      });
    }

  };
  reader.readAsText(arquivo);
}

private getTextContent(element: Element, tagName: string): string {
  const tagElement = element.querySelector(tagName);
  return tagElement ? tagElement.textContent || '' : '';
}
  
    private carregardadosJson(arquivo: File) {
    const reader = new FileReader();
    reader.onload = async (e: ProgressEvent<FileReader>) => {
      const jsonContent = e.target!.result as string;
      this.parsedData = JSON.parse(jsonContent);
      console.log('Conteúdo JSON:', jsonContent);
    };
    reader.readAsText(arquivo);
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
  