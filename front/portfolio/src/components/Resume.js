import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import cv from "../static/cv.pdf";
import { Button } from "react-mdl";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default class Resume extends Component {
    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    goToPrevPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber>1 ? 
                                state.pageNumber - 1 : state.pageNumber }));
    goToNextPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber<state.numPages ? 
                                    state.pageNumber + 1 : state.pageNumber  }));

    render() {
        const { pageNumber, numPages } = this.state;
        console.log(pageNumber, numPages);

        return (
            <div className="cv-div"> 

                <div>
                <Document
                    file={cv}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} width={500} />
                </Document>
                </div>

                <nav>
                <Button raised colored ripple onClick={this.goToPrevPage}> Prev </Button>
                Page {pageNumber} of {numPages}
                <Button raised colored ripple onClick={this.goToNextPage}> Next </Button>
                </nav>



            </div>
        );
    }
}