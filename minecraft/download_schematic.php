<?php
// Check if the 'file' parameter is set and not empty
if (isset($_GET['file']) && !empty($_GET['file'])) {
    // Sanitize the file parameter
    $file = basename($_GET['file']); // Extract the file name only
    $filePath = 'files/schematics/' . $file; // Construct the file path

    // Debugging: Print file path to verify correctness
    echo "Requested File: " . $file . "<br>";
    echo "Full Path: " . $filePath . "<br>";

    // Check if the file exists
    if (file_exists($filePath)) {
        echo "File exists! Preparing for download...<br>";

        // Set headers for file download
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . $file . '"');
        header('Content-Length: ' . filesize($filePath));

        // Output the file content
        readfile($filePath);
        exit;
    } else {
        echo "File does not exist: " . $filePath . "<br>";
        // Redirect to 'notavailable.html'
        header('Location: notavailable.html');
        exit;
    }
} else {
    echo "Invalid or missing 'file' parameter.<br>";
    // Redirect to 'notavailable.html'
    header('Location: notavailable.html');
    exit;
}
?>
