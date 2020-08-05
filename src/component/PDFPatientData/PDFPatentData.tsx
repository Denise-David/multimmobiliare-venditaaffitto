import React from 'react';
import {
  Page, Text, View, Document, StyleSheet,
} from '@react-pdf/renderer';

const PDFPatientData = () => (

  <Document>
    <Page size="A4">
      <View>
        <Text>ciao</Text>
      </View>
      <View>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default PDFPatientData;
