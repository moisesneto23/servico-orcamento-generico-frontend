<template>
    <div>
        <div></div>
      <input type="file" @change="handleFileChange" accept=".csv,.xlsx" />
      <pre>{{ jsonData }}</pre>
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
            <tr v-for="(produto, index) in parsedData" :key="index">
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
  
  @Component({
    components: {},
  })
  export default class ConversorCsvParaJson extends Vue {
    public parsedData: ItemCsvImport[] = [];
    public jsonData: string = '';
  
    async handleFileChange(event: Event): Promise<void> {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files.length > 0) {
        const file = inputElement.files[0];
        if (file) {
          const fileContent = await this.readFileContent(file);
          this.parsedData = await csvToJson().fromString(fileContent);
        }
      }
    }
  
    async readFileContent(file: File): Promise<string> {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          resolve(event.target.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsText(file);
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
  